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
    if(nbr.length>6){
     setInvMeter(true)
    }
    else if(money%100!=0){
 setNothundred(true)
 setInvMeter(false)
    }
    else if(money>182500){
      setMuch(true)
      setNothundred(false)
      setInvMeter(false)
    }
  }
  return (
    <div> 
    <div className="ml-96 pl-52 mt-5 ">Buying electricity Tokens

<div className="block">
  {invMeter?<p className='text-red'>invalid meter, only 6 digits accepted</p>:null}
<label>
    Meter number
    </label>
<input onChange={(e)=>{setNbr(e.target.value)}} value={nbr} type="text" />
</div>
    

    <div className="block">
<label>
    Amount of Money
    </label>
<input onChange={(e)=>{setMoney(e.target.value)}} value={money} type="text" />
</div>
{show? <p>Token bought: {token}</p>:null}
<button onClick={()=>submit()}>Get token</button>
    </div>

    </div>
  )
}

export default Buying
