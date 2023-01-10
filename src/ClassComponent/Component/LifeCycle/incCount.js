import React,{Component} from 'react';
class IncCount extends Component{
  constructor(props){
    super(props)
    this.state={
      count:0
    }
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
        Count : {this.state.count}
    </>);
  }
}
export default IncCount