import axios from "axios";

export default async function getBooks(order, limit, offset) {

      try {
      const res =  await axios.get(`http://localhost:8080/books`, {
        params: {
          order: order,
          limit: limit,
          offset: offset
        }
      });
      return {data: res.data, status: res.status, statusText : res.statusText} ;
      
    } catch (error) {
      throw error;
    }
  }