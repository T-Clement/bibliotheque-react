import React, { useEffect, useState } from 'react'
import List from './List';
import SeeMore from './SeeMore';
import getBooks from '../api/getBooks';

function LastBooksSection() {
  
    // States
  const [lastBooks, setLastBooks] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fetchBooks = async () => {
        // try catch ?
        const books = await getBooks("desc", 3, 0);
        setLastBooks(books);
        setIsLoading(false);
  
      } 
      fetchBooks();

    }, 1000)
  }, []);

  console.log("rendu section lastbooks");
//   console.log(lastBooks);


  // Handlers



  return (

    isLoading ?
    ( <p>Chargement en cours</p> )
    : 
    (
    <>
        <List lastBooks={lastBooks}/>
        <SeeMore />
    </>
    )

  )
}

export default LastBooksSection