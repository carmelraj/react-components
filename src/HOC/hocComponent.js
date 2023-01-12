import React, { Component } from 'react';
const HOCComponent = (OriginalComponent) => {
  class NewComponent extends Component {
    constructor(){
      super()
      this.state={
        count:0
      }
    }
    clickHandler = () =>{
      this.setState(prevState=>{
        return {count:prevState.count+1}
      });
    }
    render() {
      return <OriginalComponent name="James" count={this.state.count} clickHandler={this.clickHandler} />;
    }
  }
  return NewComponent;
};
export default HOCComponent;
