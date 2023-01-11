import React,{Component} from 'react';
class RegComp extends Component{
  render(){
    console.log('------------ regular component ------------');
    return(<>
      <h1>Regular Component</h1>
      {this.props.name}
    </>);
  }
}
export default RegComp