import React from 'react';
import { Routes, Route } from "react-router-dom";
import AssignmentList from "./AssignmentList";
import LectureList from "./LectureList";
import Quiz from "./Quiz";
import ProfileList from "./ProfileList";
import Login from "./Login";
import Home from "./Home";
import StudentList from "./StudentList";
import AssignmentDetails from './AssignmentDetails';
import AssignmentSubmit from './AssignmentSubmit';



function App() {

  
  return(
    <>

      <Routes>
        <Route index element={<Login />} />
        <Route path="students" element={<StudentList/>} />
        <Route path="lectures" element={<LectureList/>}/>
        <Route path="assignments" element={<AssignmentList/>}/>
        <Route path="assignments/:assignmentNumber/details" element={<><AssignmentDetails/><AssignmentSubmit/></>}/>
        <Route path="quiz" element={<Quiz/>}/>
        <Route path="profile" element={<ProfileList/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="home" element={<Home/>}/>
      </Routes>

     
    </>
  );
}

export default App;  