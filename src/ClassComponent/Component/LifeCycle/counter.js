import React,{Component} from 'react';
import CountLifeCycle from './count';
class CounterLifeCycle extends Component{
  constructor(){
    super()
    this.state={
      mount:true
    }
    this.mountConter = () => this.setState({mount:true});
    this.unmountConter  = () => this.setState({mount:false});
  }

  render(){
    return(<>
      <h1>Counter Life Cycle</h1>
       {this.state.mount ? <CountLifeCycle /> : null}
       <button onClick={this.mountConter} disabled={this.state.mount}>Mount</button>&nbsp;
       <button onClick={this.unmountConter} disabled={!this.state.mount}>Unmount</button>
    </>);
  }
}
export default CounterLifeCycle