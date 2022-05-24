import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import LeftSideBar from './LeftSideBar'
import Button from './Button';
import {Link} from 'react-router-dom';
import {DateTime} from 'luxon';


function AssignmentDetails({assignment}) {

const [PopUp, showPopUp]= useState(false);
const [assignmentDetails, setAssignmentDetails]= useState([]);
const [submissionLink, setSubmissionLink]= useState('');


  const submitAssignment = ()=>{
    axios.put(`https://api.codeyogi.io/assignment/${assignment.id}/submit`,
     {submissionLink: submissionLink}, {withCredentials: true});
     
  }

  const onInputChange =(event)=>{
    setSubmissionLink(event.target.value)
  }



const data= useParams();

   useEffect(()=>{ 
    const token= axios.get(`https://api.codeyogi.io/assignments/${data.assignmentNumber}`, {
        withCredentials: true,
      });

    
    token.then((response)=>{
        setAssignmentDetails(response.data);
        console.log(response.data);
    })

  }, [])

  

    return(
        <div className="flex bg-gray-200 ">
          <div> 
          <LeftSideBar> </LeftSideBar>
          </div>

         
          <div className=" bg-white rounded-md grid-flow-row auto-rows-max mx-9 mt-16 mb-28 grid grid-cols-1 divide-y-8 "> 
          <p className="text-2xl p-3 font-semibold "> Assignment Details ({assignmentDetails.assignment_id})</p> 
          
          <div className="flex p-3">
          <p className="text-xl ml-3 font-semibold" > Title: </p>
          <p className="text-xl ml-48" > {assignmentDetails.title} </p>
          </div>

          <div className="flex p-3">
          <p className="text-xl ml-3 font-semibold" > Due Date: </p>
          <p className="text-xl ml-36 " > {DateTime.fromISO(assignmentDetails.due_date).toFormat("LLL dd, yyyy")} </p>
          </div>

          <div className="flex p-3">
          <p className="text-xl ml-3 font-semibold" > Description: </p>
          <p className="text-xl ml-32" > {assignmentDetails.description} </p>
          </div>

          <div className="flex ml-7 pt-9 ">
          <Button onClick={()=> showPopUp(true)} > Re-submit </Button>
            <span className="mx-3"> </span>
            <Link to= {submissionLink} target="_blank" className="text-md mt-1" >See Your Submission- </Link>
          </div>

          <div className="m-6">



{PopUp && <div className="fixed p-10 bg-indigo-500 rounded-md top-40 left-30"> 
<button className="inset-x-8 inset-y-8" onClick={()=> showPopUp(false)}> HideButton </button>

<input type="text" value={submissionLink} onChange={onInputChange} />
<Button theme="submit"  onClick={()=> {showPopUp(false); submitAssignment()}}> Save!</Button>
</div>}

</div>

          </div>
        </div>
    )
}


export default AssignmentDetails;