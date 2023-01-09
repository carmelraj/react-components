import React from 'react';
// class ClassChildOne extends Component{
//   render(){
//     return(<>
//     <button onClick={this.methodHandler}>Greet Parent</button>
//     </>);
//   }
// }

const FuncChildOne = (props) =>{
    return(<>
    {/* <button onClick={props.methodHandler}>Greet Parent</button> */}
    <button onClick={()=>props.methodHandler('Child')}>Greet Parent</button>
    </>);
};

export default FuncChildOne