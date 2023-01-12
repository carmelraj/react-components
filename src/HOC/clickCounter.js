import React,{Component} from 'react';
class ClickIncHOC extends Component{
  render(){
    const {count} = this.state
    return(<>
    <button onClick={this.clickHandler}>Click {count}  times</button>
    </>);
  }
}
export default ClickIncHOC