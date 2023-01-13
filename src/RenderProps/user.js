import React,{Component} from 'react';
class RenderPropsUser extends Component{
  render(){
    return(<><h1>Render Props User</h1>
    {this.props.render(false)}
    </>);
  }
}
export default RenderPropsUser;