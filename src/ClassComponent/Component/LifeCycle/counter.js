import React,{Component} from 'react';
class CounterLifeCycle extends Component{
  constructor(){
    super()
    this.state={
      count: 0
    }
  }

  


  render(){
    return(<>
      <h1>Counter Life Cycle</h1>
       <p>Counter : {this.state.count} </p>
       <button onClick={this.increment}>Increment</button>&nbsp;
       <button onClick={this.decrement}>Decrement</button>
    </>);
  }
}
export default CounterLifeCycle