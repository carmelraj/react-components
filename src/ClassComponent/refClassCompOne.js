import React,{Component} from 'react';
import RefClsCompInput from './input';
class RefClsCompOne extends Component{
  constructor(){
    super()
    this.componentRef = React.createRef()
  }
  componentDidMount(){
    // this.inputRef.current.focus()
  }
  clickHandler = () =>{
    console.log(this.componentRef.current.getValue());
    this.componentRef.current.focusInput();
  }
  render(){
    return(<>
      <h1>Ref Class Component</h1>
      <RefClsCompInput ref={this.componentRef} />
      <button onClick={this.clickHandler}>Click me</button>
    </>);
  }
}
export default RefClsCompOne