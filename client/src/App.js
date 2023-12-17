import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
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
        
      
      {/* <Box sx={{height:"200px", width:"500px", display:"flex", marginLeft:"610px", marginTop:"20px",backgroundColor:"black",backgroundImage: 'url(".assets/text1.png")',
        backgroundSize: 'cover', // Adjust as needed
        backgroundPosition: 'center',}}>
      </Box> */}
     
      <Grid container spacing={2} justifyContent="center" marginTop={"30px"}>
      {/* Card 1 */}
      <Grid item>
        <Card style={{ backgroundColor: '#ffcc00', height:130,width: 400, borderRadius:"0",color:"black",boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}>
          <CardContent>
            <Typography variant="h6">Explore Diverse Yoga Classes</Typography>
            <Typography variant="body2">
                <li>Join our daily yoga classes with experienced instructors.</li>
                <li>Varied classes, including Hatha, Vinyasa, and Restorative yoga.</li> 
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Card 2 */}
      <Grid item>
        <Card style={{ backgroundColor: '#084831', height:130,width: 400, borderRadius:"0",color:"white",boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}>
          <CardContent>
            <Typography variant="h6">Meditation Sessions</Typography>
            <Typography variant="body2">
              <li>Immerse yourself in guided meditation for mental peace.</li>
              <li>Learn mindfulness techniques to reduce stress.</li>
              </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Card 3 */}
      <Grid item>
        <Card style={{ backgroundColor: '#ff5645',height:130, width: 400, borderRadius:"0", color:"white", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)"}}>
          <CardContent>
            <Typography variant="h6">Wellness Workshops</Typography>
            <Typography variant="body2">
              <li>Participate in special workshops on holistic wellness.</li>
              <li>Workshops on nutrition, mental health, and overall well-being.</li>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    

    {/* <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to bottom, rgba(169, 169, 169, 0) 0%, rgba(169, 169, 169, 1) 100%)' }}></div>
     */}
 

    </div>
    
  );
}

export default App;
