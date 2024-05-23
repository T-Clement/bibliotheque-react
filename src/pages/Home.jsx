import React from 'react'
import Banner from '../components/Banner'
import List from '../components/List'
import SeeMore from '../components/SeeMore'
import getBooks from '../api/getBooks';


// export async function loader () {
//   const books = await getBooks("desc", 3, 0);
//   return { books };
// }


function Home() {




  return (
    <>
        <Banner />
      {/* <Loading /> */}
      {/* <Tuto /> */}
      <section className='max-w-screen-lg mx-auto pb-6'>
          <h2>Les derniers livres ajoutés !</h2>
          <List />
          <SeeMore />
      </section>
    
    
    </>
  )
}

export default Home