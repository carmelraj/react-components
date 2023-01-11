import React,{useState} from 'react';
import FuncMemoCompo from './memoComp';
const FuncParentCompo = ()=>{

  const [text,setText] = useState([{name:'james'}]);
  return(<>
     <h1>Parent Func Component</h1>
     <FuncMemoCompo text={text} />
  </>);
}
export default FuncParentCompo