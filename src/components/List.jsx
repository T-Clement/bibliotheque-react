import Card from './Card'


function List({lastBooks}) {

  // where fetching datas ? in loader so in Home ? 
  // in useEffect ?
  

  return (
      
    <ul className='flex flex-col md:flex-row justify-center items-center gap-3 border-2 border-red-400'>

      {
        lastBooks.data.books.map(book => 
          <Card key = {book.id} id = { book.id } title = { book.name } pageCount = { book.pageCount } publishDate = { book.publishDate } />
        )
      }
    </ul>
  )

    
 
    
    


  
}

export default List