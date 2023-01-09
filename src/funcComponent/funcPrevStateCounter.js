import React,{useState} from 'react';
const FuncPrevStateCount = () =>{
  const [count,setCount] = useState(0);

  function incrementCount(){
    setCount(prevCount => prevCount+1);
  }

  function prevStateCount(){
    incrementCount();
    incrementCount();
    incrementCount();
    incrementCount();
    incrementCount();
  }
  return(<><h2>Function Prev State</h2>
  <p>Count : {count}</p>
  <button onClick={prevStateCount}>Click me</button>
  </>);
}
export default FuncPrevStateCount