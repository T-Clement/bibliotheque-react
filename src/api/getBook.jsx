import axios from "axios";

export default async function getBook(id) {

      try {
      const res =  await axios.get(`http://localhost:8080/books/${id}`)
      return {data: res.data, status: res.status, statusText : res.statusText} ;
      
    } catch (error) {
      throw new Error("Failed to fetch book data");
    }
  }