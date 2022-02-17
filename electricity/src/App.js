import Remaining from './components/Remaining';
// import logo from './logo.svg';

import Buying from "./components/Buying"
import "./App.css"

import Loading from './components/Loading';
import { useState } from 'react';


function App() {
  const [buy,setBuying]=useState(true)
  const [Loading,setLoading]=useState(false)
  const [remaining,setRemaining]=useState(false)
  return (
    <div className="App h-96 text-sm ">

      <div className=' pl-10 pt-14 flex'>

      <p onClick={()=>{setBuying(true);setLoading(false);setRemaining(false)}} className=' cursor-pointer hover:underline'>Buying</p>
<p onClick={()=>{
  setBuying(false)
 setLoading(true)
 setRemaining(false)
}} className='cursor-pointer hover:underline ml-10'>Loading</p>
<p 

onClick={()=>{
  setBuying(false)
 setLoading(false)
 setRemaining(true)
}}

className='cursor-pointer hover:underline ml-10'>Remaining</p>
      </div>

<div >
  {buy?<Buying></Buying>:Loading?<Loading></Loading>:remaining?<Remaining></Remaining>:<Buying></Buying>}
<Loading></Loading>
</div>

    </div>
  );
}

export default App;
