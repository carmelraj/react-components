// import React,{useState} from 'react';
// import FuncMemoCompo from './memoComp';
// const FuncParentCompo = ()=>{

//   const [text,setText] = useState([{name:'james'}]);

//   console.log('---- parent component ----');

//   return(<>
//      <h1>Parent Func Component</h1>
//      {text.map(todo => { 
//                 return (
//                     <>{todo.name}</>
//                 )
//             })}
//      <FuncMemoCompo text={text} />
//   </>);
// }
// export default FuncParentCompo

import React, { Component } from 'react';
import FuncMemoCompo from './memoComp';
class FuncParentCompo extends Component {
  constructor() {
    super();
    this.state = {
      name: 'james',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'james2',
      });
    }, 2000);
  }
  render() {
    console.log('------------ parent component ------------');
    return (
      <>
        <h1>Parent Regular Component</h1>
        {/* {this.state.name}
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
         <FuncMemoCompo name={this.state.name} />
      </>
    );
  }
}
export default FuncParentCompo;
