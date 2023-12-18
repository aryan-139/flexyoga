export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

export const validateAge = (age) => {
    const ageRegex = /^[0-9]{1,2}$/;
    if(age>17 && age<66)
    return ageRegex.test(age);
  else
    return false;
  }

export const validateContact = (contact) => {
    const contactRegex = /^\+91[0-9]{10}$/;
    return contactRegex.test(contact);
  };
  

export const validateName = (name) => {
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    return nameRegex.test(name);
  }

