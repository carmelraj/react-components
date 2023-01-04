import React from 'react';
const PropsFuncs = (props) => {
  const test = () =>{
    alert('Hi');
  }
  return(<><h1>{props.ars}</h1>
  {props.ars.map((item) => {item})}
  <button onClick={test}>Click me</button></>);
}
export default PropsFuncs