import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import {useNavigate } from 'react-router-dom';


const Navbar = () => {
  const[enroll, setEnroll] = React.useState(false);
  const[home, setHome] = React.useState(false);
  const navigate = useNavigate();
  //hardcoded email for now
  const handleContactButtonClick = () => {
    window.open('mailto:aryanraj2k25@gmail.com');
    };
  const handleAboutButtonClick = () => {
    window.open('https://www.linkedin.com/company/bloom-yoga-studio/');
  };
  const handleEnrollBatchFunction = () => {
    setEnroll(true);
  }
  const handleHomeButtonClick = () => {
    setHome(true);
  }
  if(home){
    setHome(false);
    navigate('/');
  }
  if(enroll){
    setEnroll(false);
   navigate('/practiser');

  }


  return (
    <AppBar position="static" sx={{backgroundColor:"#ffffff", boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)', height:"70px" }}>
      <Toolbar>
        <Button onClick={handleHomeButtonClick} sx={{textTransform: 'capitalize',color:"black", marginLeft:"30px"}}>Home</Button>
        <Button onClick={handleAboutButtonClick} sx={{textTransform: 'capitalize',color:"black"}}>About</Button>
        <Button onClick={handleContactButtonClick }sx={{textTransform: 'capitalize',color:"black"}}>Contact</Button>
        
        <Typography onClick={handleHomeButtonClick} variant="h4" component="div" sx={{ flexGrow: 1, fontFamily: 'Parisian', marginLeft: "520px", color:"black" }}>
          FlexYoga
        </Typography>

        <Button sx={{textTransform: 'capitalize',color:"black"}}>Manage Classes</Button>
        <Button onClick={handleEnrollBatchFunction} sx={{textTransform: 'capitalize',color:"white",borderRadius:"0", marginRight: "80px", backgroundColor:"#e0544e", '&:hover':{backgroundColor:'#702a27'}}}>Enroll in Batch</Button>

       
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
