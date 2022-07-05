import React from 'react'
import SearchForm from '../Components/SearchForm.component'
import CocktailList from '../Components/CocktailList.component'

function Home() {
  return (
    <div className="flex flex-col items-center h-screen pt-20 space-y-4">
      <SearchForm />
      <CocktailList />
    </div>
  )
}

export default Home
