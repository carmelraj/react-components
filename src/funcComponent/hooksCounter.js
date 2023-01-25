import React,{useState} from 'react';
const HooksCounter = () =>{
  const [name,setName] = useState({firstName:'', lastName:''});

  

 
  return(<><h2>Hooks Counter</h2>
  <label>First Name</label>&nbsp;&nbsp;
 <input type="text" /> <br /><br />
 <label>Last Name</label>&nbsp;&nbsp;
 <input type="text" /><br /><br />
  <button onClick={}>Click me</button> 
  <p>Your name is - {name.firstName} {name.lastName}</p>
  </>);
}
export default HooksCounter