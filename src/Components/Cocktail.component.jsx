import React from 'react'

function Cocktail({ id, name, image, info, glass }) {
  return (
    <article className="flex flex-col justify-center items-center shadow-xl p-2">
        <div>
            <img className="h-64 w-72 md:w-60 rounded-lg" src={image} alt={name} />
        </div>
        <div className="pt-2">
            <h1 className="font-bold">{name}</h1>
            <h4>{glass}</h4>
            <p>{info}</p>
        </div>
            
    </article>
  )
}

export default Cocktail
