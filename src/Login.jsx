import {useState} from 'react';
import Button from './Button';
import {string, number} from 'yup';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { getLoggedInData } from './Home';
import {form} from 'react-hook-form';



function Login() {

  const [formData, setFormData]= useState({
    email: '',
    password: ''
  });

  let [formDataError, setFormDataError]= useState(false);



  const handleFormChange=(event)=>{
    setFormData({...formData, [event.target.name]: event.target.value})
    console.log('this is handledata', formData)
  }


  

  const navigate = useNavigate();

  let [credentialsError, setCredentialsError]= useState('');

  let loggedIn = '';



  const handleSubmit =(event)=>{
    event.preventDefault();

      if(formData.email=== 'a@b.com' && formData.password === 'navin@123') {
      loggedIn = true;
      getLoggedInData(loggedIn);
      console.log('data', formData);
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
     emailValidator.validateSync(formData.email);
     } catch(e){
       console.log(e.message)
    setFormDataError(e.message);
    }
   
    try{
      passwordValidator.validateSync(formData.password)
    } catch (e) {
      setFormDataError(e.message);
      console.log(e.message);
      return;
    }


  }

  return (
    <form onSubmit={handleSubmit}>
    <div className="ml-96 mt-48">
    <span className='text-xm text-red-400'> {credentialsError}  </span>
    <h1 className="font-bold text-3xl mb-5"> Log into CodeYogi</h1>
    <div className="flex flex-col">
      <div className="flex space-x-2 mb-3"> 

    <lable htmlFor="email"> Email </lable>
    <input type="text" name="email" value={formData.email} autoComplete="email" onChange={handleFormChange} required className="border border-strong" placeholder="  your email"/>
    <span className='text-xm text-red-400'> {formDataError} </span>
      </div>
      

      <div className="flex space-x-2 mb-5"> 
      <span> Password </span>
      <lable htmlFor="password" className="sr-only"> Password </lable>
      <input id="loginpassword" type="password" name="password" value={formData.password} autoComplete="password" onChange={handleFormChange} required className="border border-strong" placeholder="  your code"/>
      <span className='text-xm text-red-400'> {formDataError} </span>
      </div>
      <Button type="submit"> LogIn </Button>
      <Button type="button"> Register </Button>
    </div>
</div> 
</form>
  );
}


export default Login;