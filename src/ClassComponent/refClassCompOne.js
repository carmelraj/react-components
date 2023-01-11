import React,{Component} from 'react';
import RefClsCompInput from './input';
class RefClsCompOne extends Component{
  constructor(){
    super()
    // this.inputRef = React.createRef()
  }
  componentDidMount(){
    // this.inputRef.current.focus()
  }
  // clickHandler = () =>{
  //   console.log(this.inputRef.current.value);
  // }
  render(){
    return(<>
      <h1>Ref Class Component</h1>
      <RefClsCompInput />
    </>);
  }
}
export default RefClsCompOne