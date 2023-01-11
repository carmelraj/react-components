import React,{Component} from 'react';
class RefClsCompInput extends Component{
  constructor(){
    super()
    this.inputRef = React.createRef()
  }

  clickHandler = () =>{
    // console.log(this.inputRef.current.value);
    this.inputRef.current.focus()
  }
  render(){
    return(<>
      {/* <h1>Ref Class Component</h1> */}
      <form>
          <input type="text" ref={this.inputRef} /> <button onClick={this.clickHandler}>Click me</button>
      </form>
    </>);
  }
}
export default RefClsCompInput