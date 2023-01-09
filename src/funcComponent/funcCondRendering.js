import React,{useState} from 'react';
const FuncCondRendering = () =>{
  const [log,setLog] = useState(true);

  // if / else
  // if(log){
  //   return <div><h1>Welcome James</h1></div>
  // }
  // else{
  //   return <div><h1>Welcome Guest</h1></div>
  // }

  // variable
//   let message;
//   if(log){
//     message = <div><h1>Welcome James</h1></div>
//   }
//   else{
//     message = <div><h1>Welcome Guest</h1></div>
//   }
// return message

  // Ternary Condition Operator
  // return(
  //   log ? 
  //   <div><h1>Welcome James</h1></div> :
  //    <div><h1>Welcome Guest</h1></div>
  // );

  // short circuit operator
  return log && <><h1>Welcome James</h1></>

}
export default FuncCondRendering;