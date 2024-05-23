import React, { useEffect, useState } from 'react'
import Card from './Card'
import getBooks from '../api/getBooks'
import Book from './Book';

function List({lastBooks}) {

  // where fetching datas ? in loader so in Home ? 
  // in useEffect ?
  

  return (
      
    <ul className='flex justify-center gap-3 border-2 border-red-400'>

      {
        lastBooks.data.books.map(book => 
          <Card key = {book.id} id = { book.id } title = { book.name } pageCount = { book.pageCount } publishDate = { book.publishDate } />
        )
      }
    </ul>
  )

    
 
    
    


  
}

export default List