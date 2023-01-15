import React, { Component } from 'react';
import {ContextConsumer} from './userContext';
class ComponentF extends Component {
  render() {
    return (
      <ContextConsumer>
        {
          (userName)=>{
            return <>Hello {userName}</>
          }
        }
      </ContextConsumer>
    );
  }
}
export default ComponentF;
  