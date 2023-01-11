import React,{Component} from 'react';
// class FwdRefChildComponent extends Component{
//   render(){
//     return(<>
//       <p>Child Forward Ref Component</p>
//       <input type="text" />
//     </>);
//   }
// }
// const FancyButton = React.forwardRef((props, ref) => (
//   <button ref={ref} className="FancyButton">
//     {props.children}
//   </button>
// ));
const FwdRefChildComponent = React.forwardRef((props,ref) => {
  return(<><input type="text" ref={ref} /></>)
})

export default FwdRefChildComponent