import React, { useState } from 'react'

const Loading = () => {
    const [token,setToken]=useState(0)
  return (
    <div className='cnt bg-white w-96 mt-20'>
      
      <p className='text-center pt-4 pb-4'>Add electricity </p>

      <div className='ml-20'>

      Enter your token for electricity

<div className='block'>
<input className='input px-2 py-1 w-56 mt-1' type="text" ></input>
<br></br>
     <button className=' mt-4 mb-6  get w-56 py-1 bg-red-500'>Save</button>
      </div>

</div>



    </div>
  )
}

export default Loading