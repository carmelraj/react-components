import React,{Component} from 'react';

class ClickCounter extends Component{
  render(){
    const {count,incrementCounter} = this.props
    return(<>
    <button onClick={incrementCounter}> Click {count}  times</button>
    </>);
  }
}
export default ClickCounter