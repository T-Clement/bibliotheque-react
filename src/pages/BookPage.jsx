import React from 'react'
import { useLoaderData } from 'react-router-dom'
import getBook from '../api/getBook';
import Book from '../components/Book';


export async function loader({ params }) {
    // console.log(params);
    const book = await getBook(params.id);
    console.log(book);
    return { book };
}





function BookPage() {

    const { book } = useLoaderData();

    console.log("Rendu !");
    // console.log("Voici le book :");
    // console.log(book);

    

  return (
    <div className=''>
        <Book book = { book.data }/>
    </div>
  )
}

export default BookPage