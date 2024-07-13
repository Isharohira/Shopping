import React, { useState } from 'react'
import { useEffect } from 'react';

function TopStrip() {

  const [showSecondMsg,setShowSecondMsg]=useState(false);
  useEffect(()=>{
    const intervalId=setInterval(()=>{
      setShowSecondMsg((prev)=>!prev)

    },2000);
return ()=>clearInterval(intervalId)
  },[])
  return (
    <div className='bg-black  text-white font-thin text-center py-2  tracking-wider'>

      {
        showSecondMsg? (<p>End of season  sale</p>):(<p>Get 30% of on your first order  use code:"First30" </p>)
      }

    </div>
  )
}

export default TopStrip