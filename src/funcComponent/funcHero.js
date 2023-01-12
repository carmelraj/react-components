import React from 'react';
const FuncHeroComp = (props) =>{
  if(props.name == 'jocker'){
    throw new error('Not a jocker');
  }
  return(<>
  <h1>Component</h1>
  {props.name}
  </>);
}
export default FuncHeroComp