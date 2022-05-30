import {useState, useEffect} from 'react';
import QuizHeader from './QuizHeader';
import GoBack from "./GoBack";
import { getQuizList } from './Api';
import QuizQuestion from './QuizQuestion';
import LeftSideBar from './LeftSideBar';


function Quiz() {

  const [quiz, setQuiz]= useState([]);

  let apiActivated;

  useEffect(()=>{
    
    const token= getQuizList();
    token.then((quizData)=>{
      setQuiz(quizData)
      console.log(quizData)
      apiActivated= true;
    });
  

  },[])

  return (
    <>
      <QuizHeader/>
    
      {quiz.map(q=> <QuizQuestion quiz={q}/>)}
      {!(apiActivated= true) && <p class="text-center my-56"> No Active Questions.</p>}
    </>
  );
}

export default Quiz;  