import React,{Component} from 'react';

// class DeStructuringClas extends Component{
//   render(){
//     return(<><h1>DeStructuring Class</h1><p>{this.props.name},{this.props.age}</p></>);
//   }
// }

class DeStructuringClas extends Component{
  render(){
    const {name,age} = this.props;
    return(<><h1>DeStructuring Class</h1><p>{name},{age}</p></>);
  }
}

export default DeStructuringClas