import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className=" bg-slate-500">
        <div className='max-w-screen-lg flex flex-row justify-between py-3 px-2 m-auto border-2 border-red-100 text-white'>
            <NavLink to="/">Ma Bibli</NavLink>
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