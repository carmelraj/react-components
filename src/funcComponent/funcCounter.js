import React,{useState} from 'react';
const FuncCounter = ()=>{
  const [count, setCount] = useState(0);

  const incCounter = ()=>{
    setCount(count+1);
  };

  const decCounter = ()=>{
    setCount(count-1);
  };

  const resetCount = () =>{
    setCount(0);
  };
  return(<>
    <h1>Function Component Counter</h1>
     <p>Count : {count}</p>
     <button onClick={incCounter}>Increment</button>&nbsp;
     <button onClick={decCounter}>Decrement</button>&nbsp;
     <button onClick={resetCount}>Reset</button>
  </>);
}
export default FuncCounter