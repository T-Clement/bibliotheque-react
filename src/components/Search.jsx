import React, { useState } from 'react'

function Search({search, setSearch}) {

    

    // react avec q qui se met à jour, histoires de useEffect -> React router tuto


    const handleChange = (e) => {
        setSearch(e.target.value);
    }

  return (
    <div className='flex flex-col w-80 mb-16 mx-auto'>
        <label className="pb-2" htmlFor="q">Rechercher par titre de livre :</label>
        <input className="ps-4 py-2" id="q" name="q" type="text" value={ search } onChange={ handleChange } />
    </div>
  )
}

export default Search