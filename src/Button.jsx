import React from 'react';

function Button({theme, onClick, children, className, disabled, ...rest}){
  let themeClass="bg-indigo-700 text-white border-black w-56 h-8";
  let disabledMode = '';
  let disabledProp= '';

  if(disabled){
    disabledMode= "bg-gray-600"; 
    disabledProp= "disabled"

  }

  if(theme=== 'submit'){
    themeClass="bg-indigo-500 shadow-gray-400 text-white border-black p-2 inline ";
  }


    if(theme==='timer'){
    themeClass="bg-blue-600 text-white border-black w-20 h-11";
  }

   if(theme==='back'){
    themeClass="bg-white text-black border-black w-20 h-11 text-3xl ";
  }

  return <button  {...rest} onClick={onClick} disabled={disabledProp} className={"border rounded-md " + themeClass + disabledMode}> {children} </button> ;


}

export default Button;