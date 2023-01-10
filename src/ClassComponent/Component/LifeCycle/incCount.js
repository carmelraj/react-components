import React,{Component} from 'react';
class IncCount extends Component{
  constructor(props){
    super(props)
    this.state={
      count:0
    },
    this.reset =()=>this.setState({count:0});  
   this.startInc = this.startInc.bind(this)  
  }
  
  componentDidMount() {
    // this.startInc()
    // startInc=()=>{
    // alert('Hi');
    // }
  }
   startInc=()=>{
    this.timerID = setInterval(()=>{
      this.setState({count:this.state.count+1})
    }, 1000);
   // let interval = setInterval(this.setState({count:this.state.count+1}), 1000);
    };

    stopIcon = () =>{
      clearInterval(this.timerID);
    };
  // let interval = setInterval(() => this.timer(), 1000);
  // this.setState({ interval });

  // startInc=()=>{
  //        setInterval(
  //     ()=>this.inc(),
  //     1000
  //   );
  // }

  // componentDidMount(){
  //   this.incCount = setInterval(
  //     ()=>this.inc(),
  //     1000
  //   );
  // }

  // inc(){
  //   this.setState({count:this.state.count+1});
  // }

  // componentWillUnmount(){
  //   clearInterval(this.incCount);
  // }
  render(){
    return(<>
      <h1>Increment Count</h1>
        <p>Count : {this.state.count}</p>
        <button onClick={this.startInc}>Start</button>&nbsp;
        <button onClick={this.stopIcon}>Stop</button>&nbsp;
        <button onClick={this.reset}>Reset</button>
    </>);
  }
}
export default IncCount