import React,{Component} from 'react';
class HOCComponent extends Component{
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
    <button onClick={this.clickHandler}>Click {click}  times</button>
    </>);
  }
}
export default ClickIncHOC