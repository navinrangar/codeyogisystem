import {React, useState} from 'react';
import axios from 'axios';
import Button from './Button';
import {string} from 'yup'
import {useParams} from 'react-router-dom';


function AssignmentSubmit() { 
  

const [PopUp, showPopUp]= useState(false);
const [submissionLink, setSubmissionLink]= useState('');
let [submissionLinkError, setsubmissionLinkError]= useState(false)

const data= useParams();


const submitAssignment = ()=>{

    const submissionLinkValid= string().url().isValidSync(submissionLink);

    submissionLinkError= submissionLinkValid ? axios.put(`https://api.codeyogi.io/assignment/${data.assignmentNumber}/submit`,
    {submissionLink: submissionLink}, {withCredentials: true}) : "enter a url with https://";
    
    setsubmissionLinkError(submissionLinkError);
    console.log(setsubmissionLinkError);
     
  }


  const handleInputChange =(event)=>{
    setSubmissionLink(event.target.value)
  }


  return(
  <div>

  <div className="m-6">

<Button onClick={()=> showPopUp(true)} > Submit </Button>

{PopUp && <div className="fixed p-10 bg-indigo-500 rounded-md top-20 left-30"> 
<button className="inset-x-8 inset-y-8" onClick={()=> showPopUp(false)}> HideButton </button>

<div className="flex flex-col"> 
<input type="text" value={submissionLink} onChange={handleInputChange} />
<span className="text-red-400 font-normal text-sm"> {submissionLinkError} </span>
<Button theme="submit" onClick={()=> {showPopUp(true); submitAssignment()}}> Save!</Button>
</div>
</div>}


</div>
       </div>


);
}

export default AssignmentSubmit;
