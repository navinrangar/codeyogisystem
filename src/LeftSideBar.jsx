import {React, useState, memo} from 'react';
import Branding from "./Branding";
import NavLink from "./NavLink";
import { MdAssignment, MdQuiz } from "react-icons/md";
import {FcManager} from 'react-icons/fc';
import {HiSpeakerphone} from 'react-icons/hi';
import {GiBowman} from 'react-icons/gi';
import {CgProfile} from 'react-icons/cg';
import {IoMdLogOut  } from "react-icons/io";
import {Link} from 'react-router-dom'



function LeftSideBar(props){

  return(
    <>

      <Branding> </Branding>

      <div>
      <h1 className="w-60 bg-gray-800 text-white text-3xl font-bold pl-3 pt-3 pb-3"> <Link to="/home"> CODEYOGI </Link></h1>
        </div>

   <div className={"fixed w-60 h-screen bg-gray-800 items-center "}>
    
     <div className="flex  hover:bg-indigo-600">
      <div className="mt-4 ml-4">
      <MdAssignment width="12" height="6" />
      </div>
     <NavLink href="/assignments"> Assignments </NavLink>
       </div>

     <div className="flex hover:bg-indigo-700">
       <div className="mt-4 ml-4">
       <HiSpeakerphone/>
       </div>
    <NavLink href="/lectures"> Lectures </NavLink>
       </div>


      <div className="flex hover:bg-indigo-700">
      <div className="mt-4 ml-4">
        <MdQuiz/>
      </div>
    <NavLink href="/quiz"> Quiz </NavLink>
       </div>


     <div className="flex hover:bg-indigo-700">
       <div className="mt-4 ml-4">
         <GiBowman/>
         </div>
    <NavLink href="/students"> Students </NavLink>
       </div>

  
      

     <div className="mt-36">

        <div className="flex hover:bg-indigo-700">
        <div className="mt-4 ml-4">
        <CgProfile/>
        </div>
       <NavLink href="/profile"> Profile </NavLink>
       </div>


        <div className="flex hover:bg-indigo-700">
        <div className="mt-4 ml-4">
        <IoMdLogOut/>
        </div>
  <NavLink href="/login"> LogOut </NavLink>
       </div>

       </div>
  </div>
    </>

  );
}

export default memo(LeftSideBar);