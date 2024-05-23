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

      lastBooks.data.books.map(book => <Book key = {book.id} book = { book }/>)

      // <ul className='flex justify-center gap-3 border-2 border-red-400'>
      //     <li><Card id={ 2 } title={ "Le seigneur des anneaux" } pageCount={ 2000 } publishDate={ "29 juillet 1954" } /></li>
      //     <li><Card id={ 3 } title={ "Le seigneur des anneaux" } pageCount={ 2000 } publishDate={ "29 juillet 1954" } /></li>
      //     <li><Card id={ 4 } title={ "Le seigneur des anneaux" } pageCount={ 2000 } publishDate={ "29 juillet 1954" } /></li>
      // </ul>
    ) 
    
    


  )
}

export default List