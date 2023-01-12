import React,{Component} from 'react';
import HOCComponent from './hocComponent';
class HOCHoverCounter extends Component{
  render(){
    const {count,clickHandler} = this.props
    return(<>
    <h1 onMouseOver={clickHandler}>Hover {count} times</h1>
    </>);
  }
}
export default HOCComponent(HOCHoverCounter)