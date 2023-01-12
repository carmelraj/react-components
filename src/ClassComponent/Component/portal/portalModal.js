import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class ClsPortalModalComp extends Component{
  constructor(){
    super()
    
    this.state={
      click:0
    }
   
  }

click = () =>{
  this.setState({
    click: this.state.click+1
  });
}

render(props){
  return ReactDOM.createPortal(<>
    <h1>Modal Component</h1>
   <p>count : { this.state.click}</p>
    <button onClick={this.click}>Click</button>&nbsp;
    <button onClick={this.props.closeModal}>Close Modal</button>
    </>
    ,
    document.getElementById('popupModal')
  );
}
}



export default ClsPortalModalComp;