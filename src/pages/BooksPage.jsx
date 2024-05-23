import React from 'react'
import { useLoaderData } from 'react-router-dom';

import getBooks from '../api/getBooks';
import Book from '../components/Book';

export async function loader () {
    const books = await getBooks("asc", 5, 0);
    return { books };
}



function BooksPage() {

    const { books } = useLoaderData();

    console.log(books);

  // scroll infinite -> fetch quand scroll arrivé au bout de la page. passer un offset et limit

  return (
    <div>
        { books.data.books.map((book) => <Book key={book.id} book = {book} />) }
    </div>
  )
}

export default BooksPage