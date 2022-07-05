import React from 'react'
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center h-64">
      <h1 className="text-xl tracking-wider font-bold">Opps! It's a Dead End</h1>
      <Link to="/">
        <button className="btn bg-green-900">BACK TO HOME</button>
      </Link>
    </div>
  )
}

export default Error
