import {React, useState} from 'react';
import Button from './Button';
import {string, number} from 'yup';


function Profile(props) {

  // useState Declaration Field

  const [email, setEmail]= useState('');
  let [emailError, setEmailError]= useState(false)

  const [passoutYear, setPassoutYear]= useState('');
  let [passoutYearError, setpassoutYearError]= useState(false)

  
    //Handle Input Change Field

  const handleEmailChange = (event)=>{
    setEmail(event.target.value);
  }


  const handlePassoutYearChange = (event)=>{
    setPassoutYear(event.target.value);
  }

  const submitForm =()=>{
   

    //Input Validation field
   
    const emailValidator= string().email().required(); 
    const emailValid = emailValidator.isValidSync(email);

   const passoutYearValidator= number().test(val => val !== '' && val.toString().length === 4 ).max(new Date().getFullYear()).required();
    
   const passoutYearValid = passoutYearValidator.isValidSync(passoutYear);

    
   //tertiary operations field

    emailError = emailValid ? "email submitted" : "email is not valid";
    console.log(emailError);
    setEmailError(emailError);

   passoutYearError = passoutYearValid ? " Passout year submitted" : "Pass out year is not valid";
    console.log(passoutYearError);
    setpassoutYearError(passoutYearError); 

  }


  return (
   <div className="grid grid-row-3 divide-x rounded-lg bg-yellow-400 m-11 h-full w-screen">
   
     <div className="text-xl m-6 font-semibold">
     <h2> Personal Details</h2>
        </div>
<div className="">
      <div className="flex space-x-60 text-xl m-6 font-semibold">
     <p className=""> First Name* </p>
        <input className="rounded-md w-96 h-9 mr-13"/>
        </div>

      <div className="flex space-x-44 text-xl m-6 font-semibold">
        <div>
     <p className=""> Last Name </p>
        <p className="text-xs bg-red"> (skip only if not not in official docs). </p>
          </div>
        <input className="rounded-md w-96 h-9 mr-13"/>
        </div>

      <div className="flex space-x-56 text-xl m-6 font-semibold">
     <p className=""> Email Address* </p>
     <div className="flex flex-col">
        <input onChange={handleEmailChange} type="email" className="rounded-md w-96 h-9 mr-13"/>
        <span className="text-red-400 font-normal text-sm"> {emailError} </span>
        </div>
        </div>


     <div className="flex space-x-56 text-xl m-6 font-semibold">
     <p className=""> Institute Name* </p>
        <input type="text" className="rounded-md w-96 h-9 mr-13"/>
        </div>



     <div className="flex flex-col space-x-56 text-xl m-6 font-semibold">
     <p className=""> Year of PassOut* </p>
        <input type="text" onChange={handlePassoutYearChange} className="rounded-md w-96 h-9 mr-13"/>
        <span className="text-red-400 text-sm font-normal"> {passoutYearError}</span>
        </div>

   <div className="flex space-x-56 text-xl m-6 font-semibold">
     <p className=""> Mobile Number* </p>
        <input type="year" className="rounded-md w-96 h-9 mr-13"/>
        </div>


   <div className="flex space-x-60 text-xl m-6 font-semibold">
     <p className=""> Date Of Birth* </p>
        <input type="year" className="rounded-md w-96 h-9 mr-13"/>
        </div>


   <div className="flex space-x-56 text-xl m-6 font-semibold">
     <p className=""> Device you have </p>
        <input type="year" className="rounded-md w-96 h-9 mr-13"/>
        </div>


   <div className="flex space-x-56 text-xl m-6 font-semibold">
     <p className=""> Institute roll no. </p>
        <input type="year" className="rounded-md w-96 h-9 mr-13"/>
        </div>


   <div className="flex space-x-56 text-xl m-6 font-semibold">
     <p className=""> Branch (College) </p>
        <input type="year" className="rounded-md w-96 h-9 mr-13"/>
        </div>
</div>

     <div className="m-4"> 
     <Button onClick={submitForm} theme="submit"> Update Profile </Button>
      </div>
</div>
     
  
  );
}

export default Profile;  