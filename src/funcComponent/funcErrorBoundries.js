import React,{Component} from 'react';
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
  componentDidCatch(error,info){
    console.log(error);
    console.log(info);
  }
  render(props){
    if(this.state.throwError){
      return <h1>Something went wrong</h1>
    }
    return this.props.children
  }
}
export default ErrorBoundary