import axios from 'axios';


export const getStudentList=()=>{
    const responsePromise= axios.get(`https://randomuser.me/api/?results=5`);

   return responsePromise.then((response)=>{
        const studentData = response.data.results;
        localStorage.setItem('users', JSON.stringify(response.data.results));
        return studentData;
    });

};