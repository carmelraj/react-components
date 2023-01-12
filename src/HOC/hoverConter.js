import React,{Component} from 'react';
class HoverCounter extends Component{
  render(){
    const {click} = this.state
    return(<>
    <h1 onMouseOver={this.clickHandler}>Hover {click} times</h1>
    </>);
  }
}
export default HoverCounter