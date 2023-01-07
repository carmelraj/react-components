import React,{Component} from 'react';
class ClsCounter extends Component{
  constructor(){
    super()
    this.state={count:0},
    this.increment=this.increment,
    this.decrement=this.decrement,
    this.reset=this.reset
  }

  increment=()=>{
    this.setState({count:this.state.count+1},()=>{
      console.log('Increment >', this.state.count);
    });
  }

  decrement=()=>{
    this.setState({count: this.state.count-1},()=>{
      console.log('Decrement >', this.state.count);
    });
  }

  reset = ()=>{
    this.setState({count: this.state.count = 0});
  }
  render(){
    return(<>Count Value : {this.state.count}<br /><br /><button onClick={this.increment}>Increment</button>&nbsp;<button onClick={this.decrement}>Decrement</button>&nbsp;<button onClick={this.reset}>Reset</button></>);
  }
}
export default ClsCounter;