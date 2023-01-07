import React from 'react';
const PropsFuncs = (props) => {
  const test = () =>{
    alert('Hi');
  }
  return(<><h1>{props.ars}</h1>
  {/* {props.ars.map((item) => {item.ars})}
  

  {props.ars.map(({ item }) => (
        <p>{item}</p>
      ))} */}

  <button onClick={test}>Click me</button></>);
}
export default PropsFuncs