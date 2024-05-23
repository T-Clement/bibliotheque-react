import React from 'react'
import { useLoaderData } from 'react-router-dom';

import getBooks from '../api/getBooks';
import Card from '../components/Card';

export async function loader () {
    const books = await getBooks("asc", 6, 0);
    return { books };
}



function BooksPage() {

    const { books } = useLoaderData();

    console.log(books);


  // add a search input
    
  // scroll infinite -> fetch quand scroll arrivé au bout de la page. passer un offset et limit

  return (
    <section className='max-w-screen-lg mx-auto py-6'>
      <ul className='grid grid-cols-2 gap-y-28'>
        { books.data.books
        .map((book) => 
          <li key={book.id} className='w-80 justify-self-center'>
            <Card 
              id = {book.id} 
              title = { book.name } 
              pageCount = { book.pageCount } 
              publishDate = { book.publishDate } 
            />
          </li>
          ) 
        }
        
      </ul>
    </section>
  )
}

export default BooksPage