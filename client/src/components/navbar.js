import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  //hardcoded email for now
  const handleContactButtonClick = () => {
    window.open('mailto:aryanraj2k25@gmail.com');
    };
  const handleAboutButtonClick = () => {
    window.open('https://www.linkedin.com/company/bloom-yoga-studio/');
  };

  return (
    <AppBar position="static" sx={{backgroundColor:"#ffffff", boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)', height:"70px" }}>
      <Toolbar>
        <Button onClick={console.log("hey")} sx={{textTransform: 'capitalize',color:"black", marginLeft:"30px"}}>Home</Button>
        <Button onClick={handleAboutButtonClick} sx={{textTransform: 'capitalize',color:"black"}}>About</Button>
        <Button onClick={handleContactButtonClick }sx={{textTransform: 'capitalize',color:"black"}}>Contact</Button>
        
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontFamily: 'Parisian', marginLeft: "520px", color:"black" }}>
          FlexYoga
        </Typography>

        <Button sx={{textTransform: 'capitalize',color:"black"}}>Manage Classes</Button>
        <Button sx={{textTransform: 'capitalize',color:"white",borderRadius:"0", marginRight: "80px", backgroundColor:"#e0544e", '&:hover':{backgroundColor:'#702a27'}}}>Enroll in Batch</Button>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
