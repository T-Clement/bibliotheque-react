import React, { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios'


// import getBook from '../../api/getBook';

function BookPage() {
  
    const [bookData, setBookData] = useState(null);
    const { id } = useParams();

    // RERENDERING BECAUSE OF SETBOOKDATA WHO IS MAKING AN AUTO RENDERING


  // useEffect(() => {
  //   console.log("UseEffect")
  //   axios.get(`http://localhost:8080/books/${id}`)
  //     .then(function(response) {
  //       // setBookData({ data: response.data, status: response.status, statusText:response.statusText });

  //       setBookData(response);
  //     })
  
  //   return () => {
      
  //   }
  // }, [id])
  

  // setBookData({}) 


    


  console.log("Rendu du composant");
  console.log(bookData);



    

  return (
    <div>Book</div>
  )
}

export default BookPage