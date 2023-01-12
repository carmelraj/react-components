import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class ClsPortalModalComp extends Component{
  constructor(){
    super()
  }

  
  render(){
    return ReactDOM.createPortal(
    
        <p>Modal</p>
    ,
    document.getElementById('popupModal')
    );
  }
}

// render(){
//   return ReactDOM.createPortal(<>
//     <h1>portal component</h1>
//     <button onClick={this.openModal}>Open Modal</button></>
//     ,
//     document.getElementById('popupModal')
//   );
// }
// }

export default ClsPortalModalComp;