import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import LeftSideBar from './LeftSideBar'
import {Link} from 'react-router-dom';
import {DateTime} from 'luxon';
import AssignmentSubmit from './AssignmentSubmit';


function AssignmentDetails() {

const [assignmentDetails, setAssignmentDetails]= useState([]);

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
          <AssignmentSubmit/>
            <span className="mx-3"> </span>
            <Link to= "heythere.com" className="text-md mt-6" >See Your Submission- </Link>
          </div>


          </div>
        </div>
    )
}


export default AssignmentDetails;