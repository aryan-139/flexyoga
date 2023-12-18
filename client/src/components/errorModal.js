import React from 'react';
import { Modal, Typography, Button } from '@mui/material';

const ErrorModal = ({ errorMessage, onClose }) => {
  return (
    <Modal
      open={Boolean(errorMessage)}
      onClose={onClose}
      aria-labelledby="error-modal-title"
      aria-describedby="error-modal-description"
    >
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
        <Typography variant="h6" id="error-modal-title" component="div" color="error">
          Error
        </Typography>
        <Typography id="error-modal-description" sx={{ marginTop: '10px' }}>
          {errorMessage}
        </Typography>
        <Button variant="contained" onClick={onClose} sx={{ marginTop: '20px' }}>
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default ErrorModal;
