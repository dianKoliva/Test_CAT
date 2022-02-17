import Remaining from './components/Remaining';
// import logo from './logo.svg';

import Buying from "./components/Buying"
import "./App.css"

import Loading from './components/Loading';


function App() {
  return (
    <div className="App h-96 text-sm ">

      <div className=' pl-10 pt-14 flex'>

      <p className=' cursor-pointer hover:underline'>Buying</p>
<p className='cursor-pointer hover:underline ml-10'>Loading</p>
<p className='cursor-pointer hover:underline ml-10'>Remaining</p>
      </div>

<div >
<Buying></Buying>
</div>

    </div>
  );
}

export default App;
