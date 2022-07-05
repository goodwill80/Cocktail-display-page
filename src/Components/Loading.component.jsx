import React from 'react'
import Spinner from './spinner.gif'


function Loading() {
  return (
    <div className="h-32 w-32 pt-24">
      <img src={Spinner} alt="loading..." />
    </div>
  )
}

export default Loading
