import React from 'react'
import { Link } from 'react-router-dom'

function Cocktail({ id, name, image, info, glass }) {
  return (
    <article className="flex flex-col justify-center shadow-xl p-2">
        <div className="flex items-center justify-center">
            <img className="h-64 w-76 md:w-76 rounded-lg" src={image} alt={name} />
        </div>
        <div className="flex items-center justify-between">
            <div className="pt-2 text-left tracking-wider px-8">
                <h1 className="font-bold text-lg">{name}</h1>
                <h4>{glass}</h4>
                <p>{info}</p>
            </div>
            <div className="pt-12 pb-4">
                <Link to={`/cocktails/${id}`}>
                    <button className="bg-green-900 capitalize h-8 tracking-wider text-sm 
                    p-2 text-white rounded-md hover:bg-green-300">details</button>
                </Link>
            </div>
        </div>
      
            
    </article>
  )
}

export default Cocktail
