import React from 'react'
import { useLoaderData } from 'react-router-dom';

import getBooks from '../api/getBooks';

export async function loader () {
    const books = await getBooks("asc", 5, 0);
    // console.log(book);
    return { books };
}



function BooksPage() {

    const { books } = useLoaderData();

    console.log(books);

  // scroll infinite -> fetch quand scroll arrivé au bout de la page. passer un offset et limit

  return (
    <div>
        
    </div>
  )
}

export default BooksPage