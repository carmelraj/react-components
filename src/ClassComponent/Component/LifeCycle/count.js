import React,{Component} from 'react';
class CountLifeCycle extends Component{
  constructor(){
    super()
    this.state={
      count: 0
    }
  }

  


  render(){
    return(<>
      
     <p> {this.state.count}</p>
     <button>Increment</button>&nbsp;<button>Decrement</button><br /><br />
    </>);
  }
}
export default CountLifeCycle