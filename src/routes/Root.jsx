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
    <div className='bg-slate-200'>
      <header>
            <NavBar />             
            
      </header>

      {isLoading && <Loading />}

      <main className='lg:max-w-screen-lg mx-auto border-2 border-red-950' >
        <Outlet />
      </main>
      
      <Footer />
    
    </div>
  )
}

export default Root