import { Box, Typography } from '@mui/material';
import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App" >
      <div style={{ display: 'flex' }}>
      <Box sx={{ width: "350px", height: "130px", marginTop: "250px", marginLeft: "55px", display:"flex" }}>
      <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontFamily: 'Parisian', marginLeft: "20px", color: "black" }}>
        <strong>Mindfulness and virtual yoga practice</strong> with friends around the world.
      </Typography>
      </Box>

      <Box sx={{ marginLeft:"880px", marginTop:"200px",width: '190px', height: '190px', backgroundColor: '#0a4a36', borderRadius: '50%' }}>
        <Typography variant="h2" component="div" sx={{ flexGrow: 1, fontFamily: 'Parisian', marginLeft: "-5px", marginTop:"55px", color: "white" }}>
          <strong>₹500</strong>
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Parisian', marginLeft: "0px", marginTop: "-14px", color: "white", marginBottom:"20px" }}>
          per month
        </Typography>
      </Box>
      </div>
      <Box sx={{ width: '60px', height: '60px', backgroundColor: '#ff624d', borderRadius: '50%', marginLeft: "170px", marginTop:"30px" }}></Box>
        <Box sx={{ width: '40px', height: '40px', backgroundColor: '#fec800', borderRadius: '50%', marginLeft: '1550px', marginTop:"20px" }}></Box>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to bottom, rgba(169, 169, 169, 0) 0%, rgba(169, 169, 169, 1) 100%)' }}></div>
      <Box >

      </Box>
    </div>
  );
}

export default App;
