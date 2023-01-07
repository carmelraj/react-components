import React,{Component} from 'react';
class ArrayClass extends Component{
  
constructor(){
  super()
  this.arrayOfObjects = [
    { coffee: "Americano", size: "Single" },
    { coffee: "Espresso", size: "Single" },
  ];
  this.cars=["maruthi","toyota","fiat"];
}


  render(){
    
    return (
    <><h1>Array Class Component</h1>
      {this.arrayOfObjects.map(({ coffee, size }) => (
        <p key={size}>{coffee}</p>
      ))}

        <h2>Car Array</h2>
        {this.cars.map((item) => (
        <p>{item}</p>
      ))}


    </>
    );
  }
}
export default ArrayClass