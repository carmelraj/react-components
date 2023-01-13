import React,{Component} from 'react';
import HOCComponent from './hocComponent';
class HOCClickComponent extends Component{
  render(){
    const {count,clickHandler,name} = this.props
    return(<>
    <button onClick={clickHandler}>{this.props.name} Click {count}  times</button>
    </>);
  }
}
export default HOCComponent(HOCClickComponent)