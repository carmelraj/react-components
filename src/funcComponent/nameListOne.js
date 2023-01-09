import React from 'react';
import Person from './person';
const FuncNameListOne = () =>{
  const person=[{id:1,name:'james',age:30,skill:'React'},{id:2,name:'sam',age:30,skill:'Java'},{id:3,name:'dinesh',age:32,skill:'PHP'},{id:4,name:'vanitha',age:25,skill:'.NET'}];

const personList = person.map(person=><Person key={person.id} person={person}></Person>)
  return(<>
  <h1>List Rendering One</h1>

{personList}

  </>);
}
export default FuncNameListOne