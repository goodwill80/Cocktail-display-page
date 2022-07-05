import React, { createContext, useEffect, useState } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = createContext();

function AppContextProvider({ children }) {
    const [ loading, setLoading ] = useState(false);
  return (
    <AppContext.Provider value={{}}>
      { children }
    </AppContext.Provider>
  )
}

export { AppContextProvider, AppContext };
