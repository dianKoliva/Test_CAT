import React, { useState } from 'react'

const Loading = () => {
    const [token,setToken]=useState(0)
  return (
    <div className=''>Enter your token for electricity

<div className='block'>
<input type="text" ></input>
<br></br>
     <button className='bg-red-500'>Empower</button>
</div>



    </div>
  )
}

export default Loading