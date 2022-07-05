import React, { createContext, useEffect, useState } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = createContext();

function AppContextProvider({ children }) {
    const [ loading, setLoading ] = useState(false);
    const [ sideBarOpen, setSideBarOpen ] = useState(false);

    const openSideBar = ()=> {
        setSideBarOpen(true);
    }

    const closeSideBar = ()=> {
        setSideBarOpen(false);
    }

  return (
    <AppContext.Provider value={{sideBarOpen, openSideBar, closeSideBar}}>
      { children }
    </AppContext.Provider>
  )
}

export { AppContextProvider, AppContext };
