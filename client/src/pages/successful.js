import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useReactToPrint } from 'react-to-print';

const ReceiptComponent = React.forwardRef(({ combinedData }, ref) => (
  <div style={{ textAlign: 'center', marginTop: '50px' }} ref={ref}>
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
        margin: '0 auto',
      }}
    >
      <Typography variant="h3" sx={{ color: 'white' }}>
        ✓
      </Typography>
    </div>
    <h1>Payment Successful</h1>
    {combinedData && <p>Thanks for choosing us, <b>{combinedData.name}!</b></p>}
    <p>Your payment has been processed successfully.</p>
    <p>Please keep the payment receipt for your records.</p>
    <Box sx={{height:"30%", width:"100%", marginTop:"2%", marginBottom:"10%", justifyContent: "left",  borderStyle: "dashed",borderWidth: "2px",}}>

    <p><b>email: </b>{combinedData.email}</p>
    <p><b>phone: </b>{combinedData.phone}</p>
    <p><b>batch: </b>{combinedData.enrollments}</p>
    <p><b>paymentId: </b>{combinedData.paymentId}</p>
    <p><b>paymentDate: </b>{combinedData.paymentDate}</p>
    <p><b>paymentStatus: </b>{combinedData.paymentStatus}</p>
    <p><b>paymentAmount: </b>{combinedData.paymentAmount}</p>
    <p><b>paymentMethod: </b>{combinedData.paymentMethod}</p>
    </Box>
  </div>
));

const PaymentSuccessful = () => {
  const participant = JSON.parse(localStorage.getItem("data"));
  const paymentData=JSON.parse(localStorage.getItem("paymentData"));
  console.log(paymentData);
  const combinedData={...participant, ...paymentData};
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <ReceiptComponent combinedData={combinedData} ref={componentRef} />
        <Button variant="contained" onClick={handlePrint} sx={{ marginTop: '20px', backgroundColor:"#ff5f4c", borderRadius:"0px" }}>
          Generate Receipt (PDF)
        </Button>
      </Box>
    </div>
  );
};

export default PaymentSuccessful;
