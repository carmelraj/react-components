import React from 'react';
import './myStyle'
import style from './myStle.module'
const FuncStyesheet = (props) =>{
  let className = props.primary ? 'green':''
  const headings = {
    color:'pink',
    fontSize:'35px'
  }
  return(<>
  {/* css style */}
  <h1 className="heading">Stylesheet</h1>
  {/* Dynamic class name */}
  <h1 className={`${className} font-lg`}>Stylesheet</h1>
  {/* Inline css */}
  <h1 style={headings}>Stylesheet</h1>
  {/* css modules */}
  <h1 className={style.success}>Stylesheet</h1>
  <p className={style.warning}>Warning message</p>
  </>);
}
export default FuncStyesheet