import React,{useState} from 'react';
import FuncMemoCompo from './memoComp';
const FuncParentCompo = ()=>{

  const [text,setText] = useState([{name:'james'}]);
  console.log('---- parent component ----');
  return(<>
     <h1>Parent Func Component</h1>
     {text.map(todo => { // using props in child component and looping
                return (
                    <>{todo.name}</>
                )
            })}
     <FuncMemoCompo text={text} />
  </>);
}
export default FuncParentCompo