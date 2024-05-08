import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
// import {styled} from "styled-components";
import Footer from './components/Footer';
import NavBar from './components/NavBar';






function Layout() {


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

export default Layout