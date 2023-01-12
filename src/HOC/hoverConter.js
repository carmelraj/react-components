import React,{Component} from 'react';
class HoverCounter extends Component{
  constructor(){
    super()
    this.state={
      click:0
    }
  }
  clickHandler = () =>{
    this.setState(prevState=>{
      return {click:prevState.click+1}
    });
  }

  render(){
    const {click} = this.state
    return(<>
    <h1 onMouseOver={this.clickHandler}>Hover {click} times</h1>
    </>);
  }
}
export default HoverCounter