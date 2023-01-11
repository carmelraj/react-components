import React,{Component} from 'react';
import RegComp from './regComp';
import PureComp from './pureComp';
class ParentRegComp extends Component{
  constructor(){
    super()
    this.state={
      name:'james'
    }
  }
  render(){
    return(<>
      <h1>Parent Regular Component</h1>
      <RegComp />
      <PureComp />
    </>);
  }
}
export default ParentRegComp