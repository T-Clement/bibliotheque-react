import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function Root() {
  return (
    <>
      <header>
            <NavBar />
                {/* <NavLink to="/">Home</NavLink>
                <NavLink to="/add-book">Ajouter un livre</NavLink> */}

                {
                //   (user) ? <><NavLink to="/profile">Welcome {}</NavLink><NavLink to="/rooms">Rooms</NavLink><button>Log-Out</button></> 
                //   : 
                //   <NavLink to="/sign-in" >Sign-in</NavLink>
                }
                
            
        </header>
        <main className='bg-slate-200'>
          <Outlet />
        </main>
        
        <Footer />
    
    </>
  )
}

export default Root