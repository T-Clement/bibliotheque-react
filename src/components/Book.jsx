import React from 'react'
import { Link } from 'react-router-dom'
import BookIcon from '/images/book-icon.webp'

function Book({ book }) {
    console.log(book)
    // console.log("Dans le book")
  return (
    <div className='p-6'>
        <ul>
            <li>Titre : { book.name }</li>
            <li>Nombre de pages : { book.pageCount }</li>
            <li>Date de publication : { book.publishDate } </li>
        </ul>
        {/* <p>
          Consulter la ficher du livre
          <Link to={`/books/${book.id}`} >
            <img src={ BookIcon } className='w-10'/>
          </Link>
        </p> */}
    </div>
  )
}

export default Book