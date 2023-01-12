import React,{Component} from 'react';
import HOCComponent from './hocComponent';
class HOCClickComponent extends Component{
  render(){
    const {count,clickHandler} = this.props
    return(<>
    <button onClick={clickHandler}>Click {count}  times</button>
    </>);
  }
}
export default HOCComponent(HOCClickComponent)