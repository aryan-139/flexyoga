import React from 'react';

const PaymentFailed = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#ff0000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'fadeIn 0.5s ease-in-out',
          margin: '0 auto',
        }}
      >
        <span style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>X</span>
      </div>
      <h1>Payment Failed</h1>
      <p>Oops! Something went wrong with your payment.</p>
      <p>Please try again later or contact customer support.</p>
      {/* You can add more information or links here */}
    </div>
  );
};

export default PaymentFailed;
