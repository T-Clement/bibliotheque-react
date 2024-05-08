import axios from "axios";

export default async function getBook(id) {

      try {
      await axios.get(`http://localhost:8080/books/${id}`)
      .then((res) => {
        // console.log(res.data, res.status, res.statusText )
        // console.log(res.status, res.data)
        return {data: res.data, status: res.status, statusText : res.statusText} ;
      } )
      // console.log(response);
      
    } catch (error) {
      console.error(error);
    }
  }