import React,{Component} from 'react';
import CountLifeCycle from './count';
class CounterLifeCycle extends Component{
  constructor(){
    super()
    this.state={
      mount:true
    }
  }

  componentDidMount(){

  }

  componentWillUnmount(){
    
  }


  render(){
    return(<>
      <h1>Counter Life Cycle</h1>
       {/* <p>Counter : {this.state.count} </p> */}
       <CountLifeCycle />
       <button onClick={this.mount}>Mount</button>&nbsp;
       <button onClick={this.unmout}>Unmount</button>
    </>);
  }
}
export default CounterLifeCycle