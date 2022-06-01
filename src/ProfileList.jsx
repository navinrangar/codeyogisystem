import React from 'react';
import Profile from './Profile';
import LeftSideBar from './LeftSideBar';
import GoBack from "./GoBack";
import {Alert} from './Alert';
import {useState, createContext} from 'react'
import AlertContext from './AlertContext';


function ProfileList() {

  const [alertMessage, setAlertMessage]= useState('');



  return (
    <> 
    <AlertContext.Provider value={{alertMessage, setAlertMessage}}>
      <div className="flex">
      <div> 
        <LeftSideBar> </LeftSideBar>
        </div>
        <div>
     <Profile/>
     </div>
     <div className="flex m-2">
     <Alert> </Alert>
<GoBack> </GoBack>
     </div>   
</div>
</AlertContext.Provider>
</>
  );
}

export default ProfileList;  