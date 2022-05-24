import axios from 'axios';
import React from 'react';
import {useState} from 'react';
import Button from "./Button";
import {useNavigate} from 'react-router-dom';
import {DateTime} from 'luxon';




function Assignments({assignment}) {

  const [PopUp, showPopUp]= useState(false);
  const [submissionLink, setSubmissionLink]= useState('');


  const submitAssignment = ()=>{
    axios.put(`https://api.codeyogi.io/assignment/${assignment.id}/submit`,
     {submissionLink: submissionLink}, {withCredentials: true});
     
  }
  
  

  const onInputChange =(event)=>{
    setSubmissionLink(event.target.value)
  }

  const navigate = useNavigate();



  return (

    <div>
      <div  className="w-screen h-full pt-4 pl-3 bg-white border border-strong shadow-md mt-5 ml-4">
   <div onClick={()=> navigate(`/assignments/${assignment.id}/details`)} className="flex">
    <h3 className="text-black text-md font-bold mb-1 mr-1"> #{assignment.id} </h3>
    <h3 className="text-black text-md font-bold mb-1 mr-3"> {assignment.title} </h3>
    <h3 className="text-black text-md font-bold mb-1"> ({DateTime.fromISO(assignment.created_at).setLocale('fr').toLocaleString(DateTime.DATE_SHORT)})</h3>
    </div>
      
      <h3 onClick={()=> navigate(`/assignments/${assignment.id}/details`)} className="text-red-600 text-md  mb-1">Due Date: {DateTime.fromISO(assignment.due_date).setLocale('fr').toLocaleString(DateTime.DATE_SHORT)}  </h3>

      <div className="m-6">

    <Button onClick={()=> showPopUp(true)} > Submit </Button>

    {PopUp && <div className="fixed p-10 bg-indigo-500 rounded-md top-30 left-30"> 
    <button className="inset-x-8 inset-y-8" onClick={()=> showPopUp(false)}> HideButton </button>
 
    <input type="text" value={submissionLink} onChange={onInputChange} />
    <Button theme="submit"  onClick={()=> {showPopUp(false); submitAssignment()}}> Save!</Button>
    </div>}
    
    </div>
           </div>
    
        </div>


      
  );
}

export default Assignments;  