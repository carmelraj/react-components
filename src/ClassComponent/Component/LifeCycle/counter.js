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
    this.setState({
      mount:true
    });
  }

  componentWillUnmount(){
    this.setState({
      mount:false
    });
  }


  render(){
    return(<>
      <h1>Counter Life Cycle</h1>
       {/* <p>Counter : {this.state.count} </p> */}
       <CountLifeCycle />
       <button onClick={}>Mount</button>&nbsp;
       <button onClick={}>Unmount</button>
    </>);
  }
}
export default CounterLifeCycle