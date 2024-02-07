import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import './Score.css';

const Score = ({ points }) => {
  let message;
  if ( points  < 4) {
    message = 'Try again';
  } else if ( points  >= 5 &&  points  <= 7) {
    message = 'Good';
  } else {
    message = 'Excellent';
  }

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Score: {points}/10</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{message}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Retry?</Button>
          <Button variant="primary">Next</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default Score;
