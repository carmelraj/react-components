import React from 'react';
import './style.css';
import FuncComp from './Component/func_component';
import ClsComp from './Component/class_component';
import PropsFunc from './Props/propsComp';
import PropCls from './Props/propsClass';
import State from './ClassComponent/state';
import PropsFuncs from './Props/propsFunc';
import ArraysFunc from './Array/arrayFunc';
import ArrayClass from './Array/arrayClass';
import ClsCounter from './ClassComponent/counter';
import PrevStateCounter from './ClassComponent/prevStateCounter';
export default function App() {
  return (
    <div>
      {/* <FuncComp />
      <ClsComp /> */}
      {/* <PropsFunc name="state1" value="value1" >
        <p>I am a children <a href="#">Link</a></p>
        <span>I am a children</span>
        </PropsFunc>
      <PropsFunc name="state2" value="value2" />
      <PropsFunc name="state3" value="value3" /> */}

      {/* <PropCls name="state1" value="value1" >
        <p>I am a children <a href="#">Link</a></p>
        <span>I am a children</span>
     </PropCls>
     <PropCls name="state2" value="value2" />
     <PropCls name="state3" value="value3" /> */}
      {/* <State /> */}
      {/* <PropsFuncs ars='[1,2,3]' /> */}
      {/* <ArraysFunc />
      <ArrayClass /> */}
      <ClsCounter />
      <PrevStateCounter />
    </div>
  );
}
