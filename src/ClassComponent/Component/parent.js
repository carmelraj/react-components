import React,{Component} from 'react';
import FuncChildOne from './childOne';
class ClassParent extends Component{
  constructor(){
    super()
    this.state={
      parentName:'Parent'
    },
    this.greetParent = this.greetParent.bind(this)
  }
  greetParent(childName){
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }
  render(){
    return(<>
    <h1>Parent Class Component</h1>
    <FuncChildOne methodHandler={this.greetParent} />
    </>);
  }
}
export default ClassParent