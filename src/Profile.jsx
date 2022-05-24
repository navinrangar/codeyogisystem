import React from 'react';
import Button from './Button';



function Profile(props) {
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
        <p className="text-xs bg-red"> (skip only if not in official docs). </p>
          </div>
        <input className="rounded-md w-96 h-9 mr-13"/>
        </div>

      <div className="flex space-x-56 text-xl m-6 font-semibold">
     <p className=""> Email Address* </p>
        <input type="email" className="rounded-md w-96 h-9 mr-13"/>
        </div>


     <div className="flex space-x-56 text-xl m-6 font-semibold">
     <p className=""> Institute Name* </p>
        <input type="text" className="rounded-md w-96 h-9 mr-13"/>
        </div>



     <div className="flex space-x-56 text-xl m-6 font-semibold">
     <p className=""> Year of PassOut* </p>
        <input type="year" className="rounded-md w-96 h-9 mr-13"/>
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
     <Button  theme="submit"> Update Profile </Button>
      </div>
</div>
     
  
  );
}

export default Profile;  