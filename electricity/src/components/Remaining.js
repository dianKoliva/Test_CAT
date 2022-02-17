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
    <div>
        <p>Check Balance</p>

 <div>
    {invalid?<p className='text-sm text-red-500'>Your meter is invalid</p>:null}
     <p className="">Enter meter number</p>
     <input value={meter} onChange={(e)=>setMeter(e.target.value)} className=' focus:outline-none '></input>
 </div>

 <button onClick={
    ()=>submit() 
 } className=' bg-red-500'>Check balance</button>

    </div>
  )
}

export default Remaining