import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class ClsPortalModalComp extends Component{
  constructor(){
    super()
    
    // this.myRef = React.createRef() 
   
  }

//   render(){
//     return ReactDOM.createPortal(
    
//         <><p>Modal</p><button onClick={this.closeModal}>Close Modal</button></>
//     ,
//     document.getElementById('popupModal')
//     );
//   }
// }

render(props){
  return ReactDOM.createPortal(<>
    <h1>Modal Component</h1>
    <button onClick={this.props.closeModal}>Close Modal</button></>
    ,
    document.getElementById('popupModal')
  );
}
}



export default ClsPortalModalComp;