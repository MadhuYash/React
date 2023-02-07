import React from 'react';

class ClassBased extends React.Component {
     constructor(props){
         super(props);
         this.state = {
             name: "User",
            
         };
      }
      
      
       render(){

        return(

            <>
             <h3>Table name is {this.state.name}</h3> 
            
            
            </>
        )
       }

}
export default ClassBased;