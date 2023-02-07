import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';


function Restop({op}) {
  console.log(op)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div><Button variant="info" className='mt-4' onClick={handleShow}>
    Opening Times
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>operating Hours</Modal.Title>
    </Modal.Header>
    <Modal.Body><ListGroup>
      <ListGroup.Item>Monday: {op.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday: {op.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednsday: {op.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday: {op.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday: {op.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday: {op.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday: {op.Sunday}</ListGroup.Item>
    </ListGroup></Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
     
    </Modal.Footer>
  </Modal></div>
  )
}

export default Restop