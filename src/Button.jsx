import React from 'react';

function Button(props){
  let themeClass="bg-indigo-700 text-white border-black w-56 h-8";

  if(props.theme=== 'submit'){
    themeClass="bg-indigo-500 shadow-gray-400 text-white border-black p-2 inline ";
  }

  if(props.theme==='logout'){
    themeClass="bg-blue-600 text-white border-black w-20 h-11";
  }

    if(props.theme==='timer'){
    themeClass="bg-blue-600 text-white border-black w-20 h-11";
  }

   if(props.theme==='back'){
    themeClass="bg-white text-black border-black w-20 h-11 text-3xl ";
  }

  return <button onClick={props.onClick} className={"border rounded-md " + themeClass}> {props.children} </button> ;


}

export default Button;