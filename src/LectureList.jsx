import React, {useState, useEffect} from 'react';
import LeftSideBar from "./LeftSideBar";
import Lectures from "./Lectures";
import GoBack from "./GoBack";
import axios from 'axios';


export function LectureList(props) {

const [lectures, setLectures] = useState([]);

  useEffect(()=>{

    const token= axios.get('https://api.codeyogi.io/batches/1/sessions', {
      withCredentials: true,
    });

    token.then((response)=>{
      setLectures(response.data);
    })
  },[])
  



  return ( 
      <div className="flex">
        <div class="h-full">
        <LeftSideBar> </LeftSideBar>
        </div>


        
        <div class="space-y-2 px-8 py-4 bg-white flex flex-col items-stretch p-2 " >

          <div className="flex flex-row justify-between mr-96">
            
        <h2 className="text-black text-2xl font-bold"> Lectures </h2> 

            <GoBack> </GoBack>
          </div>

        <div className="w-screen h-full shadow-lg m-8 mt-3"> 
        
  

     { lectures.map(l=> <Lectures  lecture={l}/>)}

        
        
        </div>
          </div>
</div>
  )
  }

export default LectureList;  