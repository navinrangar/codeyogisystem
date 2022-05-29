import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const CODEYOGI_BASE_URL = "https://api.codeyogi.io/";
const RANDOMUSER_BASE_URL= "https://randomuser.me/";


export const getStudentList=()=>{
    const responsePromise= axios.get(RANDOMUSER_BASE_URL + `api/?results=5`);

   return responsePromise
   .catch(handleError)
   .then((response)=>{
        const studentData = response.data.results;
        putCachedData("users", studentData);
        return studentData;
    });

};



export const getAssignmentList=()=>{
    const token= axios.get(CODEYOGI_BASE_URL + `batches/1/assignments`, {
      withCredentials: true,
    });

    return token
    .catch(handleError)
    .then((response)=>{
       const assignmentData= response.data;
       putCachedData("assignments", assignmentData);
       return assignmentData;
      });
    
    };


    export const getLectureList=()=>{
        const token= axios.get(CODEYOGI_BASE_URL + 'batches/1/sessions', {
            withCredentials: true,
          });
      
          return token
          .catch(handleError)
          .then((response)=>{
            const lectureData= response.data;
            putCachedData("lectures", lectureData);
            return lectureData;
          });
    }


    export const getAssignmentDetails = (data)=>{
      const token= axios.get(CODEYOGI_BASE_URL + `assignments/${data.assignmentNumber}`, {
        withCredentials: true,
      });
  
      return token 
      .catch(handleError)
      .then((response)=>{
        const AssignmentDetailsData= response.data;
        putCachedData("assignment_details", AssignmentDetailsData);
        return AssignmentDetailsData;
      });
    }


   /* export const putAssignmentLink = (data)=>{
      const token= axios.get(`https://api.codeyogi.io/assignment/${data.assignmentNumber}/submit`, {
        withCredentials: true,
      });
  
      return token.then((response)=>{
        const AssignmentLinkData= response.data;
        localStorage.setItem('assignment_details', JSON.stringify(AssignmentDetailsData));
        return AssignmentDetailsData;
      });
    } */


  

    export const putAssignmentSubmissionLink = (assignmentNumber, submissionLink)=>{
    
      axios.put(`https://api.codeyogi.io/assignment/${assignmentNumber}/submit`,
    {submissionLink: submissionLink}, {withCredentials: true});
    };





    const putCachedData = (key, data)=>{
      localStorage.setItem(key, JSON.stringify(data));
    };


    export const getCachedData= (key)=> {
      return JSON.parse(localStorage.getItem(key));
    }


    const handleError = (e)=>{
    console.log('error in your program', e);
    };