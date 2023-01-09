import React,{Component} from 'react';
class ClsEventBind extends Component{
  constructor(){
    super(),
    // This is the correct method to bind function in react
    this.clickHanderOne = this.clickHanderOne.bind(this),
    this.state={msg:'Hello'}
  }
  clickHandler(){
    this.setState({msg: 'Good Bye'});
  }
  clickHanderOne(){
    this.setState({msg: 'Good Bye'});
  }
  render(){
    return(<>
    <h1>Class Event Bind</h1>
    <p>{this.state.msg}</p>
    {/* <button onClick={this.clickHandler.bind(this)}>Click me</button></>); */}
    <button onClick={()=>this.clickHandler()}>Click me1</button>&nbsp;
    <button onClick={this.clickHanderOne}>Click me2</button>
    </>);
  }
}
export default ClsEventBind;