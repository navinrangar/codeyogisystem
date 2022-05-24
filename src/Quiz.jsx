import React from 'react';
import QuizHeader from './QuizHeader';
import GoBack from "./GoBack";


function Quiz(props) {
  return (
    <>
      <div className="flex">
      <QuizHeader> </QuizHeader>
        </div>

      <p class="text-center my-56"> No Active Questions.</p>
    </>
  );
}

export default Quiz;  