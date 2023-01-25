import React,{useState} from 'react';
const HooksCounterTwo = () =>{
  const [item,setItem] = useState([])

  
const addItem = () =>{
  setItem([...item, { id:item.length, value:Math.floor(Math.random() * 10) + 1 }])
}
 
  return(<><h2>Hooks Counter Two</h2>
    <button onClick={addItem}>Click Me</button>
    {
      item.map(item=>(
        <p key={item.id}>{item.value}</p>
        ))
    }
  </>);
}
export default HooksCounterTwo