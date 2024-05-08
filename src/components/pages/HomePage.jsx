import React from 'react'
import List from '../List'
import SeeMore from '../SeeMore'
import Banner from '../Banner'


import Loading from './Loading'


import Tuto from '../Tuto'

function HomePage() {
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

export default HomePage