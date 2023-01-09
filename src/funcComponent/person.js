import React from 'react';
const Person = ({person}) =>{
  return(<>
  <p><span>{person.id}</span>&nbsp;
      <span>{person.name}</span>&nbsp;
      <span>{person.age}</span>&nbsp;
      <span>{person.skill}</span></p>
  </>);
}
export default Person