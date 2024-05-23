import React from 'react'
import Banner from '../components/Banner'
import LastBooksSection from '../components/LastBooksSection'



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
      <section className='mx-auto pb-6 border-2 border-pink-400'>
          <h2 className='text-center md:text-left md:ps-4 py-5'>Les derniers livres ajoutés !</h2>

          <LastBooksSection />

          
      </section>
    
    
    </>
  )
}

export default Home