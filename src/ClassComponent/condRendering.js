import React, { Component } from 'react';
class ClassCondRendering extends Component {
  constructor() {
    super();
    this.state = {
      isLogedIn: true,
    };
  }
  render() {
    // if else method
    // if(this.state.isLogedIn){
    //   return (<><h1>Welcome James</h1></>);
    // }
    // else{
    //   return (<><h1>Welcome Guest</h1></>);
    // }
    // Element Variable
    // let message;
    // if(this.state.isLogedIn){
    //   message = <div><h1>Welcome James</h1></div>
    // }
    // else{
    //   message = <div><h1>Welcome Guest</h1></div>
    // }
    // return (<>{message}</>);
  // Ternary Condition Operator
  // return(
  //   this.state.isLogedIn ?
  //   <div><h1>Welcome James</h1></div> :
  //   <div><h1>Welcome Guest</h1></div>
  // );
    // short circuit operator
  return this.state.isLogedIn && <><h1>Welcome James</h1></>

  }
}
export default ClassCondRendering;
