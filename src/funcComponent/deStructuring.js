import React from 'react';
//   {/* Type 1 - function parameter itself */}
// const DeStructuring = ({name,age}) =>{
//   return(<>  
//       {name}, {age}
//   </>);
// }

{/* Type 2 - function body */}
const DeStructuring = (props) =>{
  const {name,age} = props
  return(<>  
  <h1>DeStructuring Function</h1>
      {name}, {age}
  </>);
}

export default DeStructuring;