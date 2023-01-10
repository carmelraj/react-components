import React,{Component} from 'react';
class IncCount extends Component{
  constructor(props){
    super(props)
    this.state={
      count:0
    }
    this.reset =()=>this.setState({count:0});
  }

  componentDidMount(){
    this.incCount = setInterval(
      ()=>this.inc(),
      1000
    );
  }

  inc(){
    this.setState({count:this.state.count+1});
  }
  
  componentWillUnmount(){
    clearInterval(this.incCount);
  }
  render(){
    return(<>
      <h1>Increment Count</h1>
        <p>Count : {this.state.count}</p>
        <button>Start</button>&nbsp;
        <button>Stop</button>&nbsp;
        <button onClick={this.reset}>Reset</button>
    </>);
  }
}
export default IncCount