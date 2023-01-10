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
import DeStructuring from './funcComponent/deStructuring';
import DeStructuringClas from './ClassComponent/deStructring';
import FuncClick from './funcComponent/funcClick';
import ClsClick from './ClassComponent/classClick';
import ClsEventBind from './ClassComponent/eventBind';
import FuncCounter from './funcComponent/funcCounter';
import FuncPrevStateCount from './funcComponent/funcPrevStateCounter';
import ClassParent from './ClassComponent/Component/parent';
import ClassCondRendering from './ClassComponent/condRendering';
import FuncCondRendering from './funcComponent/funcCondRendering';
import FuncNameList from './funcComponent/nameList';
import FuncNameListOne from './funcComponent/nameListOne';
import FuncStyesheet from './funcComponent/stylesheet';
import FncForm from './Form/form';
import ClsForm from './Form/clsForm';
import TimeLifeCycle from './ClassComponent/Component/LifeCycle/time';
import CounterLifeCycle from './ClassComponent/Component/LifeCycle/counter';
import IncCount from './ClassComponent/Component/LifeCycle/incCount';
import AutoCount from './ClassComponent/Component/LifeCycle/autoCount';
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
      {/* <ClsCounter />
      <PrevStateCounter />
      <FuncCounter />
      <FuncPrevStateCount /> */}
      {/* <DeStructuring name="James" age="22" /> */}
      {/* <DeStructuringClas name="Sam" age="30" /> */}
      {/* <FuncClick />
      <ClsClick /> */}
      {/* <ClsEventBind /> */}
      {/* <ClassParent /> */}
      {/* <ClassCondRendering />
      <FuncCondRendering /> */}
      {/* <FuncNameList />
      <FuncNameListOne /> */}
      {/* <FuncStyesheet primary={true} /> */}
      {/* <FncForm /> */}
      {/* <ClsForm /> */}
      {/* <TimeLifeCycle />
      <CounterLifeCycle />
      <AutoCount /> */}
      <IncCount />
    </div>
  );
}
