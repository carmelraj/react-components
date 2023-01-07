import React from 'react';
const ArraysFunc = () =>{

  const arrayOfObjects = [
    { coffee: "Americano", size: "Single" },
    { coffee: "Espresso", size: "Single" },
  ];
  const cars=["maruthi","toyota","fiat"];

  return(<><h1>Array Function Component</h1>
{arrayOfObjects.map(({ coffee, size }) => (
        <p key={size}>{coffee}</p>
      ))}


<h2>Cars Array</h2>
{cars.map((item)=>(<p>{item}</p>))}
  
    </>);


}
export default ArraysFunc;