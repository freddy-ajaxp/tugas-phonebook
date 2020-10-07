import React, { useState, useEffect } from "react";
import axios from "axios";
import { Alert, Form, Button, Modal } from "react-bootstrap";

const DetailContact = ({props, onUpdate}) => {
    
  const [formContact, setformContact] = useState({
    fullname: props.fullname,
    email: props.email,
    phone_num: props.phone_num,

  });

  const onChange = (e) => {
    setformContact({ ...formContact, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:5321/api/contact/${props.id}`, formContact)
      .then((res) => {
        onUpdate()
      })
      .catch((err) => {
        console.log("errornya ", err.response);
        if (err.response) {
          console.log(err.response);
        } else if (err.request) {
          console.log(err);
        } else {
          console.log(err);
        }
      });
  };
  
useEffect(() => {
    console.log("formContact",formContact)
}, [formContact])

  return (
    <Form onSubmit={submitHandler}>
      <Modal.Header
        className="modal-header text-center"
        style={{ border: "0" }}
      >
        <Modal.Title className="modal-title w-100">Data Contact id#{props.id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Fullname</Form.Label>
          <Form.Control
            type="text"
            name="fullname"
            onChange={(e) => onChange(e)}
            value={formContact.fullname}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={(e) => onChange(e)}
            value={formContact.email}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>No. Telp</Form.Label>
          <Form.Control
            type="text"
            placeholder="No Telp"
            name="phone_num"
            onChange={(e) => onChange(e)}
            value={formContact.phone_num}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <div className="text-center">
          <Button
            className="registerbtn"
            variant="warning"
            type="submit"
          >
            Ubah
          </Button>
        </div>
      </Modal.Footer>
    </Form>
  );
};
export default DetailContact;
