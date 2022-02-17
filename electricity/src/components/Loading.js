import React, { useState } from 'react'

const Loading = () => {
    const [token,setToken]=useState(0)
  return (
    <div>Enter your token for electricity

<div className='block'>
<input type="text" ></input>
     <button>Empower</button>
</div>



    </div>
  )
}

export default Loading