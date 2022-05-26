import axios from 'axios';
import {useNavigate} from 'react-router-dom';


export const getStudentList=()=>{
    const responsePromise= axios.get(`https://randomuser.me/api/?results=5` , {
      withCredentials: true,
    });

   return responsePromise.then((response)=>{
        const studentData = response.data.results;
        localStorage.setItem('users', JSON.stringify(studentData));
        return studentData;
    });

};



export const getAssignmentList=()=>{
    const token= axios.get(`https://api.codeyogi.io/batches/1/assignments`, {
      withCredentials: true,
    });

    return token.then((response)=>{
       const assignmentData= response.data;
       localStorage.setItem('assignments', JSON.stringify(assignmentData));
       return assignmentData;
      });
    
    };


    export const getLectureList=()=>{
        const token= axios.get('https://api.codeyogi.io/batches/1/sessions', {
            withCredentials: true,
          });
      
          return token.then((response)=>{
            const lectureData= response.data;
            localStorage.setItem('lectures', JSON.stringify(lectureData));
            return lectureData;
          });
    }


