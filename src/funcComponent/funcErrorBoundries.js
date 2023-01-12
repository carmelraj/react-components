import React,{Component} from 'react';
// const FuncErrorBoundries = (props) =>{
//   if(props.name == 'jocker'){
//     throw new error('Not a jocker');
//   }
//   return();
// }
// export default FuncErrorBoundries
class ErrorBoundary extends Component{
  constructor(){
    super()
    this.state={
      throwError:false
    }
  }
  static getDerivedStateFromError(error){
    return {throwError:true}
  }
  render(props){
    if(this.state.throwError){
      return <h1>Something went wrong</h1>
    }
    return this.props.children
  }
}
export default ErrorBoundary