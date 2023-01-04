import React,{Component} from 'react';
class state extends Component{
  constructor(){
    super()
    this.state = {
      message:'Welcome Visitor'
    }
  }
  test = () => {
    this.setState({message:'Thank you for your subscription'});
  };
  render(){
    
    return(
    <><h1>{this.state.message}</h1><button onClick={this.test}>Subscribe</button></>
    );
  }
}
export default state