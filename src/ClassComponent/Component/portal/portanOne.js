import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class ClsPortalComp extends Component{
  constructor(){
    super()
  }

  
  render(){
    return ReactDOM.createPortal(
      <h1>portal component</h1>,
      document.getElementById('root1')
    );
  }
}
export default ClsPortalComp;