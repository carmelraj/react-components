import React,{Component} from 'react';
class CountLifeCycle extends Component{
  constructor(props){
    super(props)
    this.state={
      count: 0
    }
    this.increment = ()=>{
      this.setState({count:this.state.count+1});
    }
    this.decrement = ()=>{
      if(this.state.count>0){
      this.setState({count:this.state.count-1});
    }
    }
  }

 


  render(){
    return(<>
      
     <p> {this.state.count}</p>
     <button onClick={this.increment}>Increment</button>&nbsp;
     <button onClick={this.decrement}>Decrement</button><br /><br />
    </>);
  }
}
export default CountLifeCycle