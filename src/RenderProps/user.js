import React,{Component} from 'react';
class RenderPropsUser extends Component{
  render(){
    return(<><h1>Render Props User</h1>
    {this.props.name(false)}
    </>);
  }
}
export default RenderPropsUser;