import React, { useState } from "react";


const UseState = ({}) => {
    const [count,setCount] =useState(0);

    
        return(
           <>
           
           <h3>User Table</h3>
           <h2>you clicked {count} times</h2>
           <button onClick={()=> setCount(count+1)}>Change Count</button>
           
           </>
        );
    
    
};
export default UseState; 