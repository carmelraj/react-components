import React,{Component} from 'react';
class HoverCounter extends Component{
  render(){
    const {count} = this.state
    return(<>
    <h1 onMouseOver={this.clickHandler}>Hover {count} times</h1>
    </>);
  }
}
export default HoverCounter