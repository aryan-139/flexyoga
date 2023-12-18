import React from 'react';
const Practiser = () => {
  const [name, setName]=React.useState('');
  const [email, setEmail]=React.useState('');
  const [phone, setPhone]=React.useState('');
  const [age, setAge]=React.useState('');
  const[gender, setGender]=React.useState('');

  const handleSubmit = (e) => {
    console.log('submitting');
    e.preventDefault();
  }

  return (
    <div>
     
      

    </div>
  )
}

export default Practiser