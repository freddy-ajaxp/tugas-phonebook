import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Modal } from "react-bootstrap";

const confirmatiomModal = ({props, onClose, onDelete}) => {
  const deleteHandler = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5321/api/contact/${props.id}`)
      .then((res) => {
        onDelete()
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

  return (
    // <Modal.Dialog>
    <>
      <Modal.Header closeButton>
        <Modal.Title>Delete Confirmation</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Anda yakin mau hapus {`${props.fullname}`}?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger"
        onClick={
            deleteHandler
              }
        >Yakin</Button>
        <Button variant="primary"
        onClick={
            onClose
              }
        >Batal</Button>
      </Modal.Footer>
      </>
    // </Modal.Dialog>
  );
};
export default confirmatiomModal;
