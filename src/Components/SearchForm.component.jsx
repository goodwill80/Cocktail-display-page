import React, { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../Context'

function SearchForm() {
    const { setSearchTerm } = useContext(AppContext);
    const searchValue = useRef('');


    const handleChange = () => {
        setSearchTerm(searchValue.current.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(()=>{
        searchValue.current.focus()
    }, [])


  return (
    <section className='flex items-center justify-center text-center w-screen pb-10 shadow-2xl lg:h-1/5 sm:w-1/2 lg:w-1/3'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
            <label htmlFor='name' className="text-xl text-green-700 font-bold md:tracking-widest">
                Search your favorite cocktail
            </label>
          <input
            className="p-3 shadow-lg border mt-2 tracking-wider text-lg"
            type='text'
            name='name'
            id='name'
            placeholder="Search"
            ref={searchValue}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
