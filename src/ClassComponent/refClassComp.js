import React,{Component} from 'react';
class RefClsComp extends Component{
  constructor(){
    super()
    this.inputRef = React.createRef()
  }
  componentDidMount(){
    this.inputRef.current.focus()
  }
  render(){
    return(<>
      <h1>Ref Class Component</h1>
      <form>
          <input type="text" ref={this.inputRef} />
      </form>
    </>);
  }
}
export default RefClsComp