import React from 'react';
const FuncNameList = () =>{
  const names = ['sam','jack','dinesh'];
  const person=[{id:1,name:'james',age:30,skill:'React'},{id:2,name:'sam',age:30,skill:'Java'},{id:3,name:'dinesh',age:32,skill:'PHP'},{id:4,name:'vanitha',age:25,skill:'.NET'}];

  const nameList = names.map((item)=><p>{item}</p>)
  const personList = person.map(item=>
      <p><span>{item.id}</span>&nbsp;
      <span>{item.name}</span>&nbsp;
      <span>{item.age}</span>&nbsp;
      <span>{item.skill}</span></p>
    )


  return(<>
  <h1>List Rendering</h1>
  {/* {names.map((item)=><p>{item}</p>)} */}
  {nameList}
{personList}


  </>);
}
export default FuncNameList