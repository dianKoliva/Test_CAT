import React, { useState } from 'react'

const Buying = () => {
  const [nbr,setNbr]=useState(0);
  const [money,setMoney]=useState(0)
  const [invMeter,setInvMeter]=useState(false)
  const [nothundred,setNothundred]=useState(false)
  const [much,setMuch]=useState(false)
  const [show,changeShow]=useState(false)
  const [token,setToken]=useState(true)
  const submit=()=>{
    setMuch(false)
    if(nbr.length!=6){
     setInvMeter(true)
  
    }
    else if(money>0&&money%100!=0){
setMuch(true)
 setInvMeter(false)
 console.log("invalid");
    }
    if(money===182500){
      setMuch(true)
      console.log("much");
    }
    else if(money>182500){
      setMuch(true)
      setNothundred(false)
      setInvMeter(false)
    }

  }
  return (
    <div className=' bg-white rounded-md w-96 mm mt-10  cnt'> 
     <p className='text-center text-sm pt-6'>
      Buying electricity Tokens
      </p>

    <div className=" mt-5  pl-20 pt-  text-sm">
     


<div className="block mt-4">
  {invMeter?<p className='text-red-500 text-sm '>invalid meter, only 6 digits accepted</p>:null}
<label>
    Meter number
    </label>
    <br></br>
<input className=' input focus:outline-none py-1 px-2 w-56' onChange={(e)=>{setNbr(e.target.value)}} value={nbr} type="text" />
</div>
    

    <div className="block mt-4">
      {much?<p className='  text-sm text-red-500'>invalid amount, only 
multiples of 100 not greater than 182,500 is accepted</p>:null}
<label className='text-left'>
    Amount of Money
    </label>
    <br></br>
<input className=' input focus:outline-none py-1 px-2 w-56 ' onChange={(e)=>{setMoney(e.target.value)}} value={money} type="text" />
</div>
{show? <p>Token bought: {token}</p>:null}
<div className='pb-4'>
<button className=' focus:outline-none py-2 px-2 w-56 get mt-5 mb-4' onClick={()=>submit()}>Get token</button>
    </div>
</div>


    </div>
  )
}

export default Buying
