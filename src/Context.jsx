import React, { createContext, useEffect, useState } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = createContext();

function AppContextProvider({ children }) {
    const [ loading, setLoading ] = useState(false);
    const [ sideBarOpen, setSideBarOpen ] = useState(false);
    const [ searchTerm, setSearchTerm ] = useState('a');
    const [ cocktails, setCocktails ] = useState([]);

    const fetchDrinks = async()=> {
        setLoading(true);
        try {
            const response = await fetch(`${url}${searchTerm}`);
            const data = await response.json();
            const { drinks } = data;
            if(drinks) {
                const newCocktails = drinks.map((item)=>{
                    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
                    return { id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass };
                })
                setCocktails(newCocktails);
            } else {
                setCocktails([]);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchDrinks();
    }, [searchTerm])
   

    const openSideBar = ()=> {
        setSideBarOpen(true);
    }

    const closeSideBar = ()=> {
        setSideBarOpen(false);
    }

  return (
    <AppContext.Provider 
    value={{ sideBarOpen, 
            openSideBar, 
            closeSideBar,
            loading,
            searchTerm,
            setSearchTerm,
            cocktails }}>
      { children }
    </AppContext.Provider>
  )
}

export { AppContextProvider, AppContext };
