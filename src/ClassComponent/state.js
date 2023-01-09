import React,{Component} from 'react';
class state extends Component{
  constructor(){
    super()
    this.state = {
      message:'Welcome Visitor'
    }
  }
  changeMessage(){
    this.setState({
      message:'Thank you for your subscription'
    })
  }
  changeMessageOne=()=>{
    this.setState({
      message:'Thank you for your subscription'
    })
  }
  render(){   
    return(
    <>
    <h1>{this.state.message}</h1>
    <button onClick={()=>this.changeMessage()}>Subscribe</button>&nbsp;
    <button onClick={this.changeMessageOne}>Subscribe1</button>
    </>
    );
  }
}
export default state