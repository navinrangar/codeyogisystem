import React from 'react';
import Profile from './Profile';
import LeftSideBar from './LeftSideBar';
import GoBack from "./GoBack";
import axios from 'axios';



function ProfileList(props) {




  return (
   <div className="flex">
      <div> 
        <LeftSideBar> </LeftSideBar>
        </div>
     
     <Profile> </Profile>
     <div className="m-2">
<GoBack> </GoBack>
     </div>
      
      
</div>
 
  );
}

export default ProfileList;  