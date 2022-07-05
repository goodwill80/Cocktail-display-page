import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import Loading from '../Components/Loading.component';


const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

function SingleCocktail() {
    const [ loading, setLoading ] = useState(false);
    const [ cocktail, setCocktail ] = useState(null)
    const { id } = useParams();
  
    const fetchCocktail = async()=>{
        try {
            const response = await fetch(`${url}${id}`);
            const data = await response.json();
            if(data.drinks) {
                const {
                    strDrink: name,
                    strDrinkThumb: image,
                    strAlcoholic: info,
                    strCategory: category,
                    strGlass: glass,
                    strInstructions: instructions,
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5,
                  } = data.drinks[0];
                const ingredients = [
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5,
                ];
                const newCocktail = {
                    name,
                    image,
                    info,
                    category,
                    glass,
                    instructions,
                    ingredients,
                }
                setCocktail(newCocktail);
            } else {
                setCocktail(null);
            }
        } catch (error) {
            console.log(error);
        }
        setLoading(false)
    }

    useEffect(()=>{
        setLoading(true)
        fetchCocktail();
    }, [id])

 
  

  if(loading) {
    return (
    <div className="flex items-center justify-center pt-28">
        <Loading />
    </div> 
  )}

  if(!cocktail) {
    return (
        <h2 className="text-md pt-20 capitalize text-center">no cocktail to display</h2>
    )} else {
        const {
            name,
            image,
            category,
            info,
            glass,
            instructions,
            ingredients,
          } = cocktail
          return (
            <section className="flex flex-col items-center justify-center pt-8">
               <Link to="/">
                    <button className="btn bg-green-900">Back Home</button>
                </Link>
                <h2 className='text-4xl py-12 tracking-widest font-bold'>{name}</h2>
                {/* Image and Info Container */}
                <div className='flex flex-col justify-center w-2/3 md:flex-row p-3'>
                    <img src={image} alt={name} className=" w-10/11 md:w-1/3 h-1/3 rounded-lg shadow-lg"></img>
                    <div className='space-y-4 my-8 md:-my-2 md:pl-8 w-full md:w-1/2 md:h-1/2'>
                        <p className="text-2xl text-gray-600 underline">
                            <span className='text-2xl font-bold capitalize'></span> {name}
                        </p>
                        <p>
                             <span className='text-lg font-bold capitalize'>category :</span> {category}
                        </p>
                        <p>
                            <span className='text-lg font-bold capitalize'>info :</span> {info}
                        </p>
                        <p>
                            <span className='text-lg font-bold capitalize'>glass :</span> {glass}
                        </p>
                        <p>
                            <span className='text-lg font-bold capitalize'>instructions :</span> {instructions}
                        </p>
                        <p>
                            <span className='text-lg font-bold capitalize'>ingredients :</span>
                            {ingredients.map((item, index) => {
                            return item ? <span key={index}> {item}</span> : null
                            })}
                        </p>
                    </div>
                </div>
                
            </section>
          )}
}

export default SingleCocktail
