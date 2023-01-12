import React, { Component } from 'react';
const HOCComponent = (OriginalComponent) => {
  class NewComponent extends Component {
    render() {
      return <OriginalComponent />;
    }
  }
  return NewComponent;
};
export default HOCComponent;
