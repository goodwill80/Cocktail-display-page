import React, { useContext } from 'react'
import Loading from './Loading.component';
import Cocktail from './Cocktail.component';
import { AppContext } from '../Context'

function CocktailList() {
    const { cocktails, loading } = useContext(AppContext);
  
  if(loading) {
    return <Loading />
  }
  if(cocktails.length < 1) {
    return <h2 className="pt-4">No cocktail matched your search criteria</h2>
  }
  return (
    <div className="pt-16 pb-4">
      <h1 className="text-2xl tracking-widest font-bold text-center">Cocktails</h1>
      {/* Container */}
      <div className="grid grid-cols-1 text-center gap-4 pt-4 px-4 space-x-4 
            sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        { cocktails.map((cocktail, index)=>(
            <Cocktail key={index} {...cocktail}/>
        ))}
      </div>
    </div>
  )
}

export default CocktailList
