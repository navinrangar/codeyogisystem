import React from 'react';
import { Routes, Route } from "react-router-dom";
import AssignmentList from "./AssignmentList";
import LectureList from "./LectureList";
import Quiz from "./Quiz";
import ProfileList from "./ProfileList";
import Logout from "./Logout";
import Home from "./Home";
import StudentList from "./StudentList";
import AssignmentDetails from './AssignmentDetails';
import AssignmentSubmit from './AssignmentSubmit';



function App() {

  
  return(
    <>

      <Routes>
        <Route index element={<Home />} />
        <Route path="students" element={<StudentList/>} />
        <Route path="lectures" element={<LectureList/>}/>
        <Route path="assignments" element={<AssignmentList/>}/>
        <Route path="assignments/:assignmentNumber/details" element={<AssignmentDetails/>}/>
        <Route path="assignment/:assignmentNumber/submit" element={<AssignmentSubmit/>}/>
        <Route path="quiz" element={<Quiz/>}/>
        <Route path="profile" element={<ProfileList/>}/>
        <Route path="logout" element={<Logout/>}/>
        <Route path="home" element={<Home/>}/>
      </Routes>

     
    </>
  );
}

export default App;  