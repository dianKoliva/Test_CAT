import React, { useState } from 'react'


const Remaining = () => {
    const [meter,setMeter]=useState(0);
    const [invalid,setinvalid]=useState(false)

    const submit=()=>{
setinvalid(false)
if(meter.length!==6||typeof meter!=="string"){
setinvalid(true);
}

    }

  return (
    <div  className='cnt bg-white w-96 mt-20'>
        <p className='text-center pt-4'>Check Balance</p>
        <div className='pl-20 pt-4'>
        <div>
    {invalid?<p className='mb-1 text-xs text-red-500'>Your meter is invalid</p>:null}
     <p className="">Enter meter number</p>
     <input value={meter} onChange={(e)=>setMeter(e.target.value)} className='input w-56 px-2 py-1 focus:outline-none '></input>
 </div>

 <button onClick={
    ()=>submit() 
 } className=' mt-4 mb-8 px-2 py-1 w-56 bg-red-500 get'>Check balance</button>
        </div>

 

    </div>
  )
}

export default Remaining