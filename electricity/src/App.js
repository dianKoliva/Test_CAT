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

      <p className=' cursor-pointer hover:underline'>Buying</p>
<p className='cursor-pointer hover:underline ml-10'>Loading</p>
<p className='cursor-pointer hover:underline ml-10'>Remaining</p>
      </div>

<div >
<Loading></Loading>
</div>

    </div>
  );
}

export default App;
