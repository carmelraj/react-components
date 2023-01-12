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
import IncOneCount from './ClassComponent/Component/LifeCycle/incCountOne';
import DecCount from './ClassComponent/Component/LifeCycle/decCount';
import ParentRegComp from './ClassComponent/Component/PureComponent/parentComp';
import FuncParentCompo from './funcComponent/memo/parent';
import RefClsComp from './ClassComponent/refClassComp';
import RefClsCompOne from './ClassComponent/refClassCompOne';
import FwdRefComponent from './ClassComponent/Component/Ref/forwardRefClsParent';
import ClsPortalComp from './ClassComponent/Component/portal/portanOne';
import ClsPortalCompTwo from './ClassComponent/Component/portal/portanTwo';
import ClsPortalModalComp from './ClassComponent/Component/portal/portalModal';
import ErrorBoundary from './funcComponent/funcErrorBoundries';
import FuncHeroComp from './funcComponent/funcHero';
import ClickIncHOC from './HOC/clickCounter';
import HoverCounter from './HOC/hoverConter';
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
      {/* <DeStructuring name="James" age="22" />
      <DeStructuringClas name="Sam" age="30" /> */}
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
      {/* <TimeLifeCycle /> */}
      {/* <CounterLifeCycle /> */}
      {/* <AutoCount /> */}
      {/* <IncCount /> */}
      {/* <IncOneCount /> */}
      {/* <DecCount /> */}
      {/* <ParentRegComp /> */}
      {/* <FuncParentCompo /> */}
      {/* <RefClsComp /> */}
      {/* <RefClsCompOne /> */}
      {/* <FwdRefComponent /> */}
      {/* <ClsPortalComp />
      <ClsPortalCompTwo /> */}
      {/* <ErrorBoundary>
        <FuncHeroComp name="john" />
      </ErrorBoundary>
      <ErrorBoundary>
        <FuncHeroComp name="sakthi" />
      </ErrorBoundary>
      <ErrorBoundary>
        <FuncHeroComp name="jockers" />
      </ErrorBoundary> */}
      <ClickIncHOC />
      <HoverCounter />
    </div>
  );
}
