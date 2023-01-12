import React,{Component} from 'react';
class ClickIncHOC extends Component{
  render(){
    const {click} = this.state
    return(<>
    <button onClick={this.clickHandler}>Click {click}  times</button>
    </>);
  }
}
export default ClickIncHOC