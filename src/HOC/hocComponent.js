import React,{Component} from 'react';
class HOCComponent extends Component{
  constructor(){
    super()
    this.state={
      count:0
    }
  }
  clickHandler = () =>{
    this.setState(prevState=>{
      return {click:prevState.count+1}
    });
  }
  render(){
    const {click} = this.state
    return(<>
    <button onClick={this.clickHandler}>Click {count}  times</button>
    </>);
  }
}
export default ClickIncHOC