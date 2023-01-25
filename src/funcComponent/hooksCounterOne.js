import React,{useState} from 'react';
const HooksCounterOne = () =>{
  const [name,setName] = useState({firstName:'', lastName:''});

  

 
  return(<><h2>Hooks Counter</h2>
  <label>First Name</label>&nbsp;&nbsp;
 <input type="text" value={name.firstName} 
 onChange={e => setName({ ...name, firstName: e.target.value})} /> <br /><br />
 <label>Last Name</label>&nbsp;&nbsp;
 <input type="text" value={name.lastName}
 onChange={e => setName({ ...name, lastName: e.target.value})} /><br /><br />
  <button onClick={}>Click me</button> 
  <p>Your name is - {name.firstName} {name.lastName}</p>
  <p>{JSON.stringify(name)}</p>
  </>);
}
export default HooksCounterOne