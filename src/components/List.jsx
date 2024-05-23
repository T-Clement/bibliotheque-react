import React, { useEffect, useState } from 'react'
import Card from './Card'
import getBooks from '../api/getBooks'
import Book from './Book';

function List() {

  // where fetching datas ? in loader so in Home ? 
  // in useEffect ?
  const [lastBooks, setLastBooks] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      // try catch ?
      const books = await getBooks("desc", 3, 0);
      setLastBooks(books);
      setIsLoading(false);

    } 
    fetchBooks();
  }, []);

  console.log("rendu");
  console.log(lastBooks);

  return (
      
    isLoading ? 
    ( <p>Chargement en cours</p> ) 
    : (

      <ul className='flex justify-center gap-3 border-2 border-red-400'>

        {
          lastBooks.data.books.map(book => 
            <Card key = {book.id} id = { book.id } title = { book.name } pageCount = { book.pageCount } publishDate = { book.publishDate } />
          )
        }
        
      </ul>


    )

    
  ) 
    
    


  
}

export default List