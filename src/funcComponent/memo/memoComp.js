import React from 'react';
const FuncMemoCompo = ({name})=>{
  console.log('---- child component ----');
  return(<>
     <p>Memo Component</p>


{/* {text.map(todo => { 
                return (
                    <>{todo.name}</>
                )
            })} */}
{name}
            
  </>);
}
export default memo(FuncMemoCompo)