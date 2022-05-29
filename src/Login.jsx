import {useState} from 'react';
import Button from './Button';
import {string, number} from 'yup';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import Home, { getLoggedInData } from './Home';



function Login() {

  const [email, setEmail]= useState('');
  let [emailError, setEmailError]= useState(false);

  const [password, setPassword]= useState('');
  let [passwordError, setPasswordError]= useState(false);


  const handleEmailChange = (event)=>{
    setEmail(event.target.value);
   // localStorage.setItem('email', JSON.stringify(event.target.value));
  }


  const handlePasswordChange = (event)=>{
    setPassword(event.target.value);
  }


  const navigate = useNavigate();

  let [credentialsError, setCredentialsError]= useState('');

  let loggedIn = '';

  const submitForm =()=>{

      if(email=== 'a@b.com' && password === '12345678') {
      loggedIn = true;
      getLoggedInData(loggedIn);
  
      navigate(`/home`)
    } else {
        setCredentialsError('Looks like you have entered wrong credentials');
      }
   

    //Input Validation field
   
    const emailValidator= string().email().required(); 
    const passwordValidator= string().required().min(8, "too short password min. 8").max(15, "too long password max. 15");

  

     
   /* we can do this alternatively by this tertiary operations method

   const emailValidator= string().email().required(); 
   emailValidator.isValidSync(email);
   emailError = emailValid ? "email submitted" : "email is not valid";
   console.log(emailError);
   setEmailError(emailError); */


      try{ 
     emailValidator.validateSync(email);
     } catch(e){
       console.log(e.message)
    setEmailError(e.message);
    }
   
    try{
      passwordValidator.validateSync(password)
    } catch (e) {
      passwordError = e.message;
      setPasswordError(passwordError);
      console.log(e.message);
      return;
    }


  }

  return (
    <div className="ml-96 mt-48">
    <span className='text-xm text-red-400'> {credentialsError}  </span>
    <h1 className="font-bold text-3xl mb-5"> Log into CodeYogi</h1>
    <div className="flex flex-col">
      <div className="flex space-x-2 mb-3"> 
      <p> Email ID: </p>
      
    <input type="text" onChange={handleEmailChange} className="border border-strong" placeholder="  your email"/>
    <span className='text-xm text-red-400'> {emailError} </span>
      </div>
      

      <div className="flex space-x-2  mb-5"> 
      <p> Password: </p>
      <input type="password" onChange={handlePasswordChange} className="border border-strong" placeholder="  your code"/>
      <span className='text-xm text-red-400'> {passwordError} </span>
      </div>
      <Button onClick={submitForm}> LogIn </Button>
    </div>
</div> 
  );
}


export default Login;