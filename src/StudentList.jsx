
import React, {useState, useEffect} from 'react';
import LeftSideBar from "./LeftSideBar";
import GoBack from "./GoBack";
import axios from 'axios';
import Students from './Students';



function StudentList(props) {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token= axios.get("https://randomuser.me/api/?results=5");
    token.then((response) => {
      console.log("data aa gyaa data aa gya");
      setUsers(response.data.results);
      console.log(response.data.results);
    });
  }, [])


  return (
   <div className="flex">
        <div class="h-full">
        <LeftSideBar> </LeftSideBar>
        </div>

        <div class="space-y-2 px-8 py-4 bg-white flex flex-col items-stretch p-2 " >
<div className="flex justify-between mr-96">
        <h2 className="text-black text-2xl font-bold"> Students List </h2> 

  <GoBack> </GoBack>

  </div>

 <div className="w-screen h-full shadow-lg m-8 mt-3"> 
 
 <div className="flex">
    {users.map(u=> <Students user={u}/>)}
    </div>

   </div>
   </div>
   </div>
   
   
  );
}

export default StudentList;  