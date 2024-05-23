import React, { useEffect, useState } from 'react'
import List from './List';
import SeeMore from './SeeMore';
import getBooks from '../api/getBooks';
import Loading from './pages/Loading';

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



  // utiliser useMemo pour mémoriser la hauteur du Loading ?


  return (

    isLoading ?
    ( <Loading /> )
    : 
    (
    <div className=''>
        <List lastBooks={lastBooks}/>
        <SeeMore />
    </div>
    )

  )
}

export default LastBooksSection