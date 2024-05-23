import React from 'react'
import { useLoaderData } from 'react-router-dom';

import getBooks from '../api/getBooks';
import Card from '../components/Card';

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
        { books.data.books.map((book) => <Card key={book.id} id = {book.id} title = { book.name } pageCount = { book.pageCount } publishDate = { book.publishDate } />) }
    </div>
  )
}

export default BooksPage