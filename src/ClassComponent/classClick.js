import React,{Component} from 'react';
class ClsClick extends Component{
  constructor(){
    super(),
    this.clickHandler = this.clickHandler
  }
  clickHandler(){
    alert('Button Clicked');
  }
  render(){
    return(<><h1>Class Click Function</h1><button onClick={this.clickHandler}>Click me</button></>);
  }
}
export default ClsClick;