import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';
import qr from '../assets/qr.jpeg';
import { registerParticipant } from '../api/participantApi';
//import participantContext from '../context/participantContext';
import { registerPayment } from '../api/paymentApi';

const Payment = () => {
  const handleStripePayment = () => {
    window.open('https://buy.stripe.com/test_6oE8zZ3BF13T9cQ001');
  };

  const handleReceipt = async () => {
    console.log("Receipt");
    const storedData=localStorage.getItem("data");
    const data=JSON.parse(storedData);

    if(data!=null){
      try{
        const response = await registerParticipant(data);
        console.log(response);
        if(response.status===200){
          try{
            const paymentData=await registerPayment(data);
            console.log(paymentData);
            if(paymentData.status===200){
              window.location.href = '/successful';
            }
          }
          catch(error){
            localStorage.clear();
            window.location.href = '/failed';
          }
        }
        else{
          localStorage.clear();
          window.location.href = '/failed';
        }
       
      }
      catch(error){
        console.log(error);
      }
    }
  };

  return (
    <Box sx={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor:"#ffdfdb", marginTop:"50px" }}>
      <Box sx={{ border: "4px solid white", maxWidth: '550px', margin: '0 auto', padding: '20px', backgroundColor:"#aa3e32", marginTop:"10px", color:"white"}}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
        Choose a Payment Option
      </Typography>

      {/* QR Code Payment */}
      <Box sx={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <Typography variant="h6"><strong>Payment via QR Code</strong></Typography>
        <Typography variant="body1" sx={{ marginTop: '10px', marginBottom: '15px' }}>
          Scan the QR code below to make the payment.
        </Typography>
        {/* Add your QR code image here */}
        <img src={qr} alt="QR Code" style={{ maxWidth: '30%', marginLeft:"187px" }} />
      </Box>

      <Divider sx={{ marginBottom: '30px' }} />

      {/* Stripe Payment */}
      <Box sx={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <Typography variant="h6"><strong>Payment via Stripe</strong></Typography>
        <Typography variant="body1" sx={{ marginTop: '10px', marginBottom: '15px' }}>
          Use the secure Stripe payment gateway to complete your transaction.
        </Typography>
        <Button variant="contained" onClick={handleStripePayment} sx={{ marginTop: '15px', backgroundColor:"#ffc700", marginLeft:"370px" }}>
          Pay via Stripe
        </Button>
      </Box>


      <Button variant="contained" onClick={handleReceipt} sx={{backgroundColor:"#ffc700", marginLeft:"0px", marginTop:"20px", width: "550px"}}>
          Get Payment Receipt
      </Button>

      <Typography variant="body2" sx={{ marginTop: '20px', color: 'white' }}>
        <strong>Note:</strong> Please keep the payment receipt for manual confirmation if payment done via QR code.
      </Typography>
      </Box>
    </Box>
  );
};

export default Payment;
