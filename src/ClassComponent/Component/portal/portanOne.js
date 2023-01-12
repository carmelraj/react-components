import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ClsPortalModalComp from './portalModal';
class ClsPortalComp extends Component{
  constructor(){
    super()
    this.state = {
      modal : false
    }
    // this.myRef = React.createRef() 
  }

  openModal = () =>{
    this.setState({
      modal : true
    });
  }

  closeModal = () =>{
    this.setState({
      modal : false
    });
  }
  
  render(){
    return(<>
      <h1>portal component</h1>
     {  this.state.modal ? <ClsPortalModalComp closeModal={this.closeModal}   /> : null}
      <button onClick={this.openModal}>Open Modal</button></>
     
    );
  }
}
export default ClsPortalComp;