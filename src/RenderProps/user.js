import React,{Component} from 'react';
class RenderPropsUser extends Component{
  constructor(){
    super(),
    this.clickHandler = this.clickHandler
  }
  clickHandler(){
    alert('Button Clicked');
  }
  render(){
    return(<><h1>Render Props User</h1>
    {this.props.name(false)}
    </>);
  }
}
export default RenderPropsUser;