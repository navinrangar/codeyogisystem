import React from 'react';
import {Link} from 'react-router-dom';



function Login(props) {
  return (
    <div>
  <p className="text-center text-5xl mt-48"> You have been logged out! </p>
 <Link to="/"> <p className="text-center text-3xl mt-16 border-2 bg-yellow-400 mx-96 p-1"> Login Again! </p> </Link>
  </div> 
  );
}

export default Login;  