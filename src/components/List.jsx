import React from 'react'
import Card from './Card'


function List() {
  return (
    
    
    <ul className='flex justify-center gap-3 border-2 border-red-400'>
        <li><Card id={ 2 } title={ "Le seigneur des anneaux" } pageCount={ 2000 } publishDate={ "29 juillet 1954" } /></li>
        <li><Card id={ 3 } title={ "Le seigneur des anneaux" } pageCount={ 2000 } publishDate={ "29 juillet 1954" } /></li>
        <li><Card id={ 4 } title={ "Le seigneur des anneaux" } pageCount={ 2000 } publishDate={ "29 juillet 1954" } /></li>
    </ul>
    


  )
}

export default List