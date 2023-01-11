import React from 'react';
import FuncMemoCompo from './memoComp';
const FuncParentCompo = ()=>{
  return(<>
     <h1>Parent Func Component</h1>
     <FuncMemoCompo />
  </>);
}
export default FuncParentCompo