import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="max-w-screen-lg m-auto">
        <div className='flex flex-row py-3 px-2  border-2 border-red-100 text-white'>
            <NavLink className="me-auto" to="/">Ma Bibli</NavLink>
            <ul className="flex flex-row">
                <li className="basis-1/3 text-center"><NavLink to='book/new'>Ajouter un livre</NavLink></li>
                <li className="basis-1/3 text-center"><NavLink to='author/new'>Ajouter un auteur</NavLink></li>
                <li className="basis-1/3 text-center"><NavLink to='editor/new'>Ajouter un éditeur</NavLink></li>
            </ul>

        </div>
        
    </nav>
  )
}

export default NavBar