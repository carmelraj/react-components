import React,{Component} from 'react';
import HOCComponent from './hocComponent';
class HOCHoverCounter extends Component{
  render(){
    const {count} = this.state
    return(<>
    <h1 onMouseOver={this.clickHandler}>Hover {count} times</h1>
    </>);
  }
}
export default HOCComponent(HOCHoverCounter)