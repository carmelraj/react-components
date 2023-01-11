import React from 'react';
const FuncMemoCompo = ({text})=>{
  console.log('---- child component ----');
  return(<>
     <p>Memo Component</p>
    {/* {
      props.map(
        (item) => {<p>{item.name}</p>
        );
    } */}


{text.map(todo => { // using props in child component and looping
                return (
                    <>{todo.name}</>
                )
            })}

            
  </>);
}
export default FuncMemoCompo