import React,{Component} from 'react';
import HOCComponent from './hocComponent';
class HOCClickComponent extends Component{
  render(){
    const {count} = this.state
    return(<>
    <button onClick={this.clickHandler}>Click {count}  times</button>
    </>);
  }
}
export default HOCComponent(HOCClickComponent)