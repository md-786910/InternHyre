import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
function Model({
  children,
  show,
  handleClose,
  handleShow,
  heading,
  disableRegister,
}) {
  const navigate = useNavigate();

  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton={false} closeVariant="danger">
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {disableRegister && (
          <Button variant="primary" onClick={() => navigate("/register")}>
            Register
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default Model;
