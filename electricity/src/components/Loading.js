import React, { useState } from 'react'

const Loading = () => {
    const [token,setToken]=useState(0)
  return (
    <div>Enter your token for electricity

     <input type="text" ></input>
     <button>Empower</button>

    </div>
  )
}

export default Loading