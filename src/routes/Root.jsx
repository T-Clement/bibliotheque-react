import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from '../components/Footer'

import Loading from '../components/pages/Loading'

function Root() {

// loading state
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  
  
  return (
    <>
      <header>
            <NavBar />             
            
      </header>

      {isLoading && <Loading />}

      <main className='bg-slate-200'>
        <Outlet />
      </main>
      
      <Footer />
    
    </>
  )
}

export default Root