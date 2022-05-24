import React from "react";
import LeftSideBar from "./LeftSideBar";

function Home(){
  return(
    <div className="flex"> 
      <div>
    <LeftSideBar> </LeftSideBar>
         </div>

      <div> 
        <img className="w-56 h-56 mt-32 ml-96 mr-80" src="../public/assets/armyman.jpg"/>
      <p className="text-2xl text-green-500 mt-10 ml-80"> You are on the Front! Stay Alert p </p>
        </div>
    </div>
  );
}

export default Home;
