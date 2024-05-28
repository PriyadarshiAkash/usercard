import React, { useState } from "react";
import Card from "./Card"; 
// stick to bootom , beside footr counter button button count + 1 ,
const Footer = () => {
  const [count, setCount] = useState(1);
  const counter = () => {
    setCount(count + 1);
  };

  
  return (
    <>
    
    <Card count ={count}/>
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex justify-center">
      <div className="text-2xl">{count}</div>
      <button
        className="px-4 py--2 bg-blue-500 text-white rounded-md"
        onClick={counter}
      >
        Click Here
      </button>
    </div>
    
    </>
  );
};

export default Footer;
