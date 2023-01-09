import React from 'react';
const FuncClick = ()=>{
  function clickHandler(){
    alert('Button Clicked');
  }
  return(<><h1>Click Function</h1><button onClick={clickHandler}>Click me</button></>);
}
export default FuncClick