import React from 'react'
import { useLoaderData } from 'react-router-dom'
import getBook from '../api/getBook';


export async function loader({ params }) {
    // console.log(params);
    const book = await getBook(params.id);
    // console.log(book);
    return { book };
}





function BookPage() {

    // const [bookData, setBookData] = useState(null);
    // const { id } = useParams();

    const { book } = useLoaderData();

    console.log("Rendu !");
    console.log("Voici le book :");
    console.log(book);

  return (
    <div>BookPage</div>
  )
}

export default BookPage