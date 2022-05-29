import {React, useState, memo} from 'react';
import Branding from "./Branding";
import NavLink from "./NavLink";



function LeftSideBar(props){

  return(
    <>

      <Branding> </Branding>

   <div className={" w-60 h-screen bg-gray-800 items-center "}>
    
     <div className="flex  hover:bg-indigo-600">
    <img className="w-8 h-7 ml-2 mt-4 border border-white bg-white rounded-full" src="https://cdn-icons-png.flaticon.com/512/2038/2038022.png"/> <NavLink href="/assignments"> Assignments </NavLink>
       </div>

     <div className="flex hover:bg-indigo-700">
   <img className="w-8 h-7 ml-2 mt-4 border border-white bg-white rounded-full" /> <NavLink href="/lectures"> Lectures </NavLink>
       </div>


      <div className="flex hover:bg-indigo-700">
   <img className="w-8 h-7 ml-2 mt-4 border border-white bg-white rounded-full"/> <NavLink href="/quiz"> Quiz </NavLink>
       </div>


     <div className="flex hover:bg-indigo-700">
   <img className="w-8 h-7 ml-2 mt-4 border border-white bg-white rounded-full" src="https://cdn-icons-png.flaticon.com/512/3135/3135773.png" href="/profile"/> <NavLink href="/students"> Students </NavLink>
       </div>

  
      

     <div className="mt-36">

        <div className="flex hover:bg-indigo-700">
   <img className="w-8 h-7 ml-2 mt-4 border border-white bg-white rounded-full" src="https://cdn-icons-png.flaticon.com/512/3237/3237472.png" href="/profile"/> <NavLink href="/profile"> Profile </NavLink>
       </div>


        <div className="flex hover:bg-indigo-700">
   <img className="w-8 h-7 ml-2 mt-4 border border-white bg-white rounded-full"/> <NavLink href="/login"> LogOut </NavLink>
       </div>

       
       </div>
  </div>
    </>

  );
}

export default memo(LeftSideBar);