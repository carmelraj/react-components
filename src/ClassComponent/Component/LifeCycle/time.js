import React,{Component} from 'react';
class TimeLifeCycle extends Component{
  constructor(){
    super()
    this.state = {
      date:new Date()
    }
  }

  

  tick(){
    this.setState({
      date: new Date()
    });
  }
  render(){
    return(<>
      <h1>Time</h1>
      {this.state.date.toLocaleTimeString()}
    </>);
  }
}
export default TimeLifeCycle