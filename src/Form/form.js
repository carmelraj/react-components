import React,{setState,useState} from 'react';
const FncForm = ()=>{
  const [formValue,setState] = useState([{
    userName:'',
    comments:'',
    topic:''
  }]);

  const getFormValue = (event)=>{

    setState({...formValue,[event.target.name]:[event.target.value]});
  };

  const formSubmitHandler = (event)=>{
    console.log(formValue);
    event.preventDefault();
  
  };

  return(<>
  <h1>Form</h1>
    <form>
      <label>UserName</label>&nbsp;&nbsp;
      <input type="text" value={formValue.userName} onChange={getFormValue} /> <br /><br />
      <label>Comments</label>&nbsp;&nbsp;
      <textarea  value={formValue.comments}  onChange={getFormValue}></textarea> <br /><br />
      <label>Topics</label>&nbsp;&nbsp;
      <select  value={formValue.topic}  onChange={getFormValue}>
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue">Vue</option>
      </select> <br /><br />
      <button onSubmit={formSubmitHandler}>Submit</button>
    </form>
  </>);
}
export default FncForm