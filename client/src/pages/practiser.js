import React from 'react';
import { LinearProgress, Box, Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { validateAge, validateEmail,validateContact, validateName } from '../utils/validators';
//import ErrorModal from '../components/errorModal';

const Practiser = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [countryCode, setCountryCode] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [age, setAge] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [batch, setBatch] = React.useState('');
  const [terms, setTerms] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  //const [closeErrorModal, setCloseErrorModal] = React.useState(false);

  const handleSubmit = (e) => {
    const fullname = firstName + ' ' + lastName;
    const phoneNumber = countryCode + phone;
    if(!validateName(fullname)){
      alert("Enter a valid name");
      return;
    }
    if(!validateEmail(email)){
      alert("Enter a valid email");
      return;
    }
    if(!validateAge(age)){
      alert("Enter a valid age");
      return;
    }
    if(!validateContact(phoneNumber)){
      alert("Enter a valid phone number");
      return;
    }
    if(!terms){
      alert("Please accept the terms and conditions");
      return;
    }
    const data={
      name: fullname,
      email: email,
      age: age,
      gender: gender,
      phone: phoneNumber,
      enrollments: batch,
      terms: terms
    }
    //cached in local storage
    localStorage.setItem("data", JSON.stringify(data));
    //console.log(data);

    //redirect to payment page
    if(progress===100)
    window.location.href = "/payment";
    else{
      alert("Please fill all the fields");
    }  
    e.preventDefault();
  }

  //handle progress bar
  React.useEffect(() => {
      if(firstName!==""){
        setProgress(10);
      }
      if(lastName!==""){
        setProgress(20);
      }
      if(email!==""){
        setProgress(30);
      }
      if(phone!==""){
        setProgress(40);
      }
      if(age!==""){
        setProgress(50);
      }
      if(batch!==""){
        setProgress(70);
      }
      if(gender!==""){
        setProgress(80);
      }
      if(terms){
        setProgress(100);
      }
  },[firstName, lastName, email, phone, age, batch, gender, terms]);
  

  return (
    <div>
      <LinearProgress
      variant="determinate"
      value={progress}
      sx={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 10000 }}
    />
      {/* form component */}
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '700px', margin: '0 auto', backgroundColor:"#b4c9c1", marginLeft:"70px", marginTop:"40px" }}>
        <Box sx={{border: "4px solid white",backgroundColor:"#064c31", width: "634px", height:"700px", marginLeft:"30px", marginRight:"50px",marginTop:"30px", marginBottom:"30px", color:"white"}}>
    
        <Typography variant="h5" sx={{ textAlign: 'center', margin: '20px',textDecoration: 'underline' }}>Monthly Yoga Sessions - Reserve Your Spot!</Typography>
        <TextField id="first-name" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} label="First Name" variant="outlined" margin="normal" sx={{ width: '90%', marginLeft: "20px", '& label': { color: 'white' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: 'white' }, '& input': { color: 'white' } } }} />

        <TextField id="last-name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} label="Last Name" variant="outlined" margin="normal" sx={{ width: '90%', marginLeft: "20px", '& label': { color: 'white' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: 'white' }, '& input': { color: 'white' } } }} />

        <TextField id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" margin="normal" sx={{ width: '90%', marginLeft: "20px", '& label': { color: 'white' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: 'white' }, '& input': { color: 'white' } } }} />


        <FormControl variant="outlined" sx={{ width: '20%', marginLeft: '20px', marginTop: "17px", '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: 'white' }, '& input': { color: 'white' } } }}>
        <InputLabel id="country-code-label" sx={{ color: 'white' }}>Country Code</InputLabel>
        <Select
          labelId="country-code-label"
          id="country-code"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          label="Country Code"
          sx={{ color: 'white' }}
        >
          <MenuItem value="+1">+1</MenuItem>
          <MenuItem value="+91">+91</MenuItem>
          {/* Add more country codes as needed */}
        </Select>
      </FormControl>

        <TextField id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} label="Phone" variant="outlined" margin="normal" sx={{ width: '67%', marginLeft: "20px", '& label': { color: 'white' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: 'white' }, '& input': { color: 'white' } } }} />

        <TextField id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} label="Age" variant="outlined" margin="normal" sx={{ width: '90%', marginLeft: "20px", '& label': { color: 'white' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: 'white' }, '& input': { color: 'white' } } }} />

        {/* <Slider value={age} onChange={(e) => setAge(e.target.value)} aria-label="Age" valueLabelDisplay="auto" min={18} max={65} /> */}
        <FormControl variant="outlined" sx={{ width: '60%', marginLeft: '20px', marginTop: "17px", '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: 'white' }, '& input': { color: 'white' } } }}>
        <InputLabel id="country-code-label" sx={{ color: 'white' }}>Select a Batch</InputLabel>
        <Select
          labelId="batch-label"
          id="batch"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
          label="Select Batch"
          sx={{ color: 'white' }}
        >
          <MenuItem value="1">6-7 AM</MenuItem>
          <MenuItem value="2">7-8 AM</MenuItem>
          <MenuItem value="3">8-9 AM</MenuItem>
          <MenuItem value="4">5-6 PM</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" sx={{ width: '27%', marginLeft: '20px', marginTop: "17px", '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: 'white' }, '& input': { color: 'white' } } }}>
        <InputLabel id="gender-label" sx={{ color: 'white' }}>Gender</InputLabel>
        <Select
          labelId="gender-label"
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          label="Country Code"
          sx={{ color: 'white' }}
        >
          <MenuItem value="M">Male</MenuItem>
          <MenuItem value="F">Female</MenuItem>
          <MenuItem value="O">Others</MenuItem>
          
        </Select>
      </FormControl>

        <FormControlLabel
            control={<Checkbox checked={terms} onChange={(e) => setTerms(e.target.checked)} sx={{ marginLeft: '20px'}}/>}
            label="Read the comprehensive Terms and Conditions for a thorough understanding."
        />

        <Button onClick={handleSubmit} variant="contained" sx={{backgroundColor:"#ff5645", marginLeft:"27px", marginTop:"20px", width: "570px"}}>
          Checkout
        </Button>
        </Box>
      </Box>

      {/* carousel component */}
    </div>
  );
}

export default Practiser;

