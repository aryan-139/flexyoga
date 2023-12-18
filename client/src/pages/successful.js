import React from 'react';
import { Typography } from '@mui/material';

const PaymentSuccessful = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#4caf50', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'fadeIn 0.5s ease-in-out',
          margin: '0 auto', // Center the container horizontally
        }}
      >
        <Typography variant="h3" sx={{ color: 'white' }}>
          ✓
        </Typography>
      </div>
      <h1>Payment Successful</h1>
      <p>Your payment has been processed successfully.</p>
      <p>Please keep the payment receipt for your records.</p>
      {/* You can add more information or links here */}
    </div>
  );
};

export default PaymentSuccessful;
