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
      {name}, {age}
  </>);
}

export default DeStructuring;