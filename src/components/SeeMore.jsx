import React from 'react'
import { Link } from 'react-router-dom'

function SeeMore() {
  return (
    <div className='flex flex-row-reverse border-r-emerald-500 me-10 mt-10'>
        <Link className='p-3 bg-cyan-800 rounded-lg text-white' to='/books'>Voir plus +</Link>
    </div>
  )
}

export default SeeMore