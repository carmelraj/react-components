import React,{PureComponent} from 'react';
class PureComp extends PureComponent{
  render(){
    console.log('------------ pure component ------------');
    return(<>
      <h1>Pure Component</h1>
      {this.props.name}
    </>);
  }
}
export default PureComp