import React from 'react';
import { AppBar, Toolbar, Typography, Button, Drawer, ListItem, List } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const[enroll, setEnroll] = React.useState(false);
  const[home, setHome] = React.useState(false);
  const screen = window.screen.width;
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const device = screen > 768 ? 'desktop' : 'mobile';

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
    window.location.href = '/';
  }
  if(enroll){
    setEnroll(false);
    window.location.href = '/practiser';

  }

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };


  return (
  <div>
    {device === 'desktop' && (
      <AppBar position="static" sx={{ backgroundColor: "#ffffff", boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)', height: "70px" }}>
        <Toolbar>
          <Button onClick={handleHomeButtonClick} sx={{ textTransform: 'capitalize', color: "black", marginLeft: "30px" }}>Home</Button>
          <Button onClick={handleAboutButtonClick} sx={{ textTransform: 'capitalize', color: "black" }}>About</Button>
          <Button onClick={handleContactButtonClick} sx={{ textTransform: 'capitalize', color: "black" }}>Contact</Button>

          <Typography onClick={handleHomeButtonClick} variant="h4" component="div" sx={{ flexGrow: 1, fontFamily: 'Parisian', marginLeft: "520px", color: "black" }}>
            FlexYoga
          </Typography>

          <Button sx={{ textTransform: 'capitalize', color: "black" }}>Manage Classes</Button>
          <Button onClick={handleEnrollBatchFunction} sx={{ textTransform: 'capitalize', color: "white", borderRadius: "0", marginRight: "80px", backgroundColor: "#e0544e", '&:hover': { backgroundColor: '#702a27' } }}>Enroll in Batch</Button>

        </Toolbar>
      </AppBar>
    )}
    {device === 'mobile' && (
        <>
          <AppBar position="static" sx={{ backgroundColor: "#ffffff", boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)', height: "70px" }}>
            <Toolbar>
              <Button onClick={toggleDrawer(true)} sx={{ textTransform: 'capitalize', color: "black", marginLeft: "30px" }}>
                <MenuIcon />
              </Button>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontFamily: 'Parisian', color: "black" }}>
                FlexYoga
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <List>
              <ListItem button onClick={handleHomeButtonClick}>
                <Typography variant="body1">Home</Typography>
              </ListItem>
              <ListItem button onClick={handleAboutButtonClick}>
                <Typography variant="body1">About</Typography>
              </ListItem>
              <ListItem button onClick={handleContactButtonClick}>
                <Typography variant="body1">Contact</Typography>
              </ListItem>
              <ListItem button onClick={handleEnrollBatchFunction}>
                <Typography variant="body1">Enroll in Batch</Typography>
              </ListItem>
            </List>
          </Drawer>
        </>
      )}
   </div>
  );
};

export default Navbar;
