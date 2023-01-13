import React, { Component } from 'react';
const HOCComponent = (OriginalComponent,countNum) => {
  class NewComponent extends Component {
    constructor(){
      super()
      this.state={
        count:0
      }
    }
    clickHandler = () =>{
      this.setState(prevState=>{
        return {count:prevState.count+countNum}
      });
    }
    render() {
      return <OriginalComponent 
      count={this.state.count} 
      clickHandler={this.clickHandler} 
      {...this.props}
      />
    }
  }
  return NewComponent;
};
export default HOCComponent;
