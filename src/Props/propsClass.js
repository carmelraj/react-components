import React,{Component} from 'react';
class propCls extends Component{
  render(){
    return (
    <><h1>Class Props : {this.props.name}, {this.props.value}</h1>
      <p>{this.props.children}</p>
    </>)
  }
}
export default propCls;