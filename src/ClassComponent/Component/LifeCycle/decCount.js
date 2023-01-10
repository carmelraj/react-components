import React,{Component} from 'react';
class DecCount extends Component{
  constructor(props){
    super(props)
    this.state={
      count:10,
      isRunning:false
    },
    this.reset =()=>this.setState({count:0});   
  }
  
  // if (counter > 0) {
   startInc=()=>{
    if(this.state.isRunning){
      clearInterval(this.timerID);
      this.setState({isRunning:false});
    }
    // else if(this.state.count >0){
    //   clearInterval(this.timerID);
    // }
    else{
    this.timerID = setInterval(()=>{
      this.setState({count:this.state.count-1,isRunning:true})
    }, 1000);
  }
    };

    // stopIcon = () =>{
    //   clearInterval(this.timerID);
    // };
  
  render(){
    return(<>
      <h1>Decrement Count</h1>
        <p>Count : {this.state.count}</p>
        <button onClick={this.startInc}>{this.state.isRunning ? 'Stop':'Start'}</button>&nbsp;
    
        <button onClick={this.reset}>Reset</button>
    </>);
  }
}
export default DecCount