import React, { Component, PureComponent } from 'react';
import RegComp from './regComp';
import PureComp from './pureComp';
class ParentRegComp extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: 'james',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'james',
      });
    }, 2000);
  }
  render() {
    console.log('------------ parent component ------------');
    return (
      <>
        <h1>Parent Regular Component</h1>
        {this.state.name}
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </>
    );
  }
}
export default ParentRegComp;
