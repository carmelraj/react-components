import React,{Component} from 'react';
import FwdRefChildComponent from './forwardRefClsChild';
class FwdRefComponent extends Component{
  constructor(){
    super()
    this.inputRef = React.createRef()
  }
  clickHandler = () => {
    this.inputRef.current.focus()
    console.log(this.inputRef.current.value);
  }
  render(){
    return(<>
      <h1>Parent Forward Ref Component</h1>
      <FwdRefChildComponent ref={this.inputRef} />
      <button onClick={this.clickHandler}>Click me</button>
    </>);
  }
}
export default FwdRefComponent