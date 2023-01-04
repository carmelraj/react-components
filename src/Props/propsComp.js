import React from 'react';
// const PropsFunc = (props) => (
//   <>

//     <h1>Props {props.name}</h1>
//   </>
// );
// with return
const PropsFunc = (props) => {
  return (
    <>
      <h1>
        Props : {props.name}, {props.value}
      </h1>
      {props.children}
    </>
  );
};
export default PropsFunc;
