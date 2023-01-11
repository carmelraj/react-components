import React from 'react';
const FuncMemoCompo = (props)=>{
  return(<>
     <p>Memo Component</p>
    {/* {
      props.map(
        (item) => {<p>{item.name}</p>
        );
    } */}


{props.text.map(todo => { // using props in child component and looping
                return (
                    <>{todo.name}</>
                )
            })}

            
  </>);
}
export default FuncMemoCompo