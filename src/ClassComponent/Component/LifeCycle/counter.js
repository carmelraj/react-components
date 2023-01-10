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
       Counter : {this.state.count} 
    </>);
  }
}
export default CounterLifeCycle