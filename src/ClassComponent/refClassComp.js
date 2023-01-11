import React,{Component} from 'react';
class RefClsComp extends Component{
  constructor(){
    super()
    this.inputRef = React.createRef()
  }
  componentDidMount(){
    this.inputRef.current.focus()
  }
  clickHandler = () =>{
    console.log(this.inputRef.current.value);
  }
  render(){
    return(<>
      <h1>Ref Class Component</h1>
      <form>
          <input type="text" ref={this.inputRef} /> <button onClick={this.clickHandler}>Click me</button>
      </form>
    </>);
  }
}
export default RefClsComp