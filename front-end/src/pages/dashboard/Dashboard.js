import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Button, Table, Modal, Form, Row, Col } from "react-bootstrap";
// custom components
import DetailContact from "../../components/DetailContact";
import ConfirmationModal from "../../components/ConfirmationModal";
import RegisterModal from "../../components/RegisterModal";

//css
import "./dashboard.css";

const Dashboard = () => {
  console.log("rerender");
  // show / hide contact modal
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);
  //modal each contact
  const [dataModal, setDataModal] = useState({});
  //all data contact
  const [contactList, setContactList] = useState([]);
  const [paginationData, setPaginationData] = useState({
    currentPage: 0,
    totalItems: 0,
    totalPages: 0,
    dataEachPage: 3,
  });

  const pageNumSelection = [1, 2, 3, 4, 5];
  
  const actionModal = (dataToEdit) => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
      setDataModal(dataToEdit);
    }
  };

  const actionModalDelete = (dataToEdit) => {
    if (showModalDelete) {
      setShowModalDelete(false);
    } else {
      setShowModalDelete(true);
      setDataModal(dataToEdit);
    }
  };

  const actionModalRegister = () => {
    if (showModalRegister) {
      setShowModalRegister(false);
    } else {
      setShowModalRegister(true);
    }
  };

  //GET seluruh contact list
  const getContactList = useCallback(
    (page = 0, size = paginationData.dataEachPage) => {
      axios
        .get(`http://localhost:5321/api/findAll?page=${page}&size=${size}`)
        .then((result) => {
          const resultData = result.data.contactList;
          const { currentPage, totalItems, totalPages } = result.data;
          setContactList(resultData);
          setPaginationData({
            currentPage: currentPage,
            totalItems: totalItems,
            totalPages: totalPages,
            dataEachPage: size,
          });
        })
        .catch((err) => {
          console.log("error fetching data :", err);
        });
    },
    contactList
  );

  // select untuk pagination dibawah halaman
  let paginationFooter = () => {
    const options = [];
    for (let i = 1; i < paginationData.totalPages + 1; i++) {
      options.push(i);
    }
    return (
      <>
        <select
          onChange={(e) => {
            getContactList(e.target.value - 1, paginationData.dataEachPage);
            console.log(
              "paginationData.dataEachPage",
              paginationData.dataEachPage
            );
          }}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </>
    );
  };

  let counter = 0;
  const listContacts = contactList.map(
    (eachContact) => (
      counter++,
      (
        <tr>
          <td>{counter}</td>
          <td>{eachContact?.fullname}</td>
          <td>{eachContact?.phone_num}</td>
          <td>{eachContact?.email}</td>
          <td>
            <Button
              variant="warning"
              onClick={() => {
                actionModal(eachContact);
              }}
            >
              Lihat/Ubah
            </Button>{" "}
            <Button
              variant="danger"
              onClick={() => {
                actionModalDelete(eachContact);
              }}
            >
              Hapus
            </Button>{" "}
          </td>
        </tr>
      )
    )
  );

  useEffect(() => {
    getContactList();
    paginationFooter();
  }, []);
  
  return (
    <React.Fragment>
      <Container style={{ textAlign: "Center", minHeight: "50rem" }}>
        <h1>List Transaction</h1>
        <br></br>
        <div style={{ textAlign: "left" }}>
          <Form>
            <Row>
              <Col md={{ span: 1 }}>
                <Form.Group>
                  {/* <Form.Label>#data per halaman</Form.Label> */}
                  <Form.Control
                    as="select"
                    name="size"
                    onChange={(e) => {
                      getContactList(0, e.target.value);
                      setPaginationData({
                        ...paginationData,
                        dataEachPage: e.target.value,
                      });
                    }}
                  >
                    <option value={0} disabled>
                      {" "}
                      --Pilih--
                    </option>
                    {pageNumSelection.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={{ span: 1 }}>#data</Col>
              <Col
                md={{ span: 1 }}
                style={{ position: "relative", left: "75%" }}
              >
                <Button
                  variant="primary"
                  onClick={() => {
                    actionModalRegister();
                  }}
                >
                  Tambah
                </Button>
              </Col>
            </Row>
          </Form>
        </div>

        <div style={{ alignContent: "center" }}>
          <Table responsive striped bordered hover size="sm">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Lengkap</th>
                <th>No Telp</th>
                <th>email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{listContacts}</tbody>
          </Table>
        </div>

        {paginationFooter()}
        <Modal size="md" show={showModal} onHide={actionModal}>
          <DetailContact
            props={dataModal}
            onUpdate={getContactList}
          ></DetailContact>
        </Modal>
        <Modal show={showModalDelete} onHide={actionModalDelete}>
          <ConfirmationModal
            props={dataModal}
            onClose={actionModalDelete}
            onDelete={getContactList}
          />
        </Modal>
        <Modal show={showModalRegister} onHide={actionModalRegister}>
          <RegisterModal onRegister={getContactList} />
        </Modal>
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;
