import React,{Component} from 'react';
class ClsForm extends Component{
  constructor(){
    super()
    this.state={
      userName:'',
      comments:'',
      topic:''
    }
  }

  getUsername = event =>{
    this.setState({
      userName: event.target.value
    });
  };

  getComments = event =>{
    this.setState({
      comments: event.target.value
    });
  };

  getTopics = event =>{
    this.setState({
      topic: event.target.value
    });
  };

  formSubmit = (event) =>{
    event.preventDefault();
    console.log(this.state.userName,this.state.comments,this.state.topic);
  };

  render(){
    return(<>
    <form onSubmit={this.formSubmit}>
      <label>user name</label>&nbsp;&nbsp;
      <input type="text" value={this.state.userName} onChange={this.getUsername} /><br /><br />
      <label>comments</label>&nbsp;&nbsp;
      <textarea value={this.state.comments} onChange={this.getComments}></textarea><br /><br />
      <label>topic</label>&nbsp;&nbsp;
      <select value={this.state.topic} onChange={this.getTopics}>
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue">Vue</option>
      </select><br /><br />
      <button >Submit</button>
    </form>
    </>);
  }
}
export default ClsForm;