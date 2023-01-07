import React,{Component} from 'react';
class PrevStateCounter extends Component{
  constructor(){
    super(),
    this.state={count:0},
    this.increment=this.increment
  }
  increment=()=>{
    // this.setState({count: this.state.count+1});
    this.setState((prevState)=>({
      count: prevState.count+1
    }))
  }
  prevState=()=>{
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render(){
    return(<><div><br />Prev state value : {this.state.count}<br /><br /><button onClick={this.prevState}>Increment</button></div></>);
  }
}
export default PrevStateCounter