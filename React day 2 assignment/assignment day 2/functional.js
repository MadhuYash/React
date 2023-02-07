import React from "react";

 const Functional = ({userData}) => {
    
         return(
           <>
           <div className="container">
        <table
          className="table stripped text-left"
          style={{ background: "white", color: "black"}}
          >
          <thead>
                <tr>
                  <th>UserName</th>
                  <th>Age</th>
                  <th>Gender</th>
                </tr>
         </thead>
         <tbody>
               {userData.map((item, index) => (
                        <tr key={index}>
                        <td>{item.Username}</td>
                         <td>{item.age}</td>
                          <td>{item.gender}</td>
                        </tr>
               ))}
         </tbody>

          </table>

          
           </div>
           
           </>
        );
    
    
};
export default Functional;                                               