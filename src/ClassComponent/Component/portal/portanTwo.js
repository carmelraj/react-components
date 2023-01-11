import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class ClsPortalCompTwo extends Component{
  constructor(){
    super()
  }

  
  render(){
    return ReactDOM.createPortal(
    
        <p>three div</p>
    
      ,
      document.getElementById('one')
    );
  }
}

// return ReactDOM.createPortal(
//   <h1>Portal demo</h1>,
//   document.getElementById('portal')
// )

// render() {
  
//   // Creating portal
//   return ReactDOM.createPortal(
//     <button style={{marginLeft: '10px'}}>
//       Click
//     </button>,
//     document.getElementById('portal')
//   );
// }

export default ClsPortalCompTwo;