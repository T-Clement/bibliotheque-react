import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';

import getBooks from '../api/getBooks';
import Card from '../components/Card';
import Search from '../components/Search';

export async function loader () {
    const books = await getBooks("asc", 6, 0);
    return { books };
}



function BooksPage() {

    const { books } = useLoaderData();

    console.log(books);

    // states

    const [search, setSearch] = useState('');




  // add a search input

  // scroll infinite -> fetch quand scroll arrivé au bout de la page. passer un offset et limit

  return (
    <section className='py-6'>
      
      <Search search = { search } setSearch = { setSearch }/>

      <ul className='grid grid-cols-1 md:grid-cols-2 gap-y-28'>
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