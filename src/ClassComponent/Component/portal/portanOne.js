import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class ClsPortalComp extends Component{
  constructor(){
    super()
  }

  
  render(){
    return(<>
      <h1>portal component</h1>
      <button onClick={this.openModal}>Open Modal</button></>
     
    );
  }
}
export default ClsPortalComp;