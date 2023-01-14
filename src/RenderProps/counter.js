import React,{Component} from 'react';

class RenderPropsCounter extends Component{
  constructor(){
    super()
    this.state={
      count:0
    }
  }
  incrementCounter = () =>{
    this.setState(prevState=>{
      return {count:prevState.count+1}
    });
  }
  render(){
    
    return(<>
      {/* {this.props.render(this.state.count,this.incrementCounter)} */}
      {this.props.children(this.state.count,this.incrementCounter)}
    </>);
  }
}
export default RenderPropsCounter