import React from 'react'

function Book({ book }) {
    console.log(book)
  return (
    <div>
        <ul>
            <li>Titre : { book.data.name }</li>
            <li>Nombre de pages : { book.data.pageCount }</li>
            <li>Date de publication : { book.data.publishDate } </li>
        </ul>
    </div>
  )
}

export default Book