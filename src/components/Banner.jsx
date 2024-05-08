import React from 'react'
// import image from '../assets/images/0'


function Banner() {
  return (
    <div className='max-w-screen-lg mx-auto mb-8'>
        <h2 className='text-center py-10'>L'application simple de Bilbiothèque en API !</h2>
        <div className='flex flex-col-reverse sm:flex-row px-6 gap-6 border-purple-300 border-2 justify-around items-center'>
            <h3 className='border-2  text-center'>Vous ne savez plus quels livres vous avez ?<br/> On va vous le rappeler !</h3>
            <div className='border-2'>
              <img className="-skew-y-2 object-fit w-80 rounded-lg shadow-2xl" src='/images/0_0.webp'/>

            </div>
        </div>
    </div>
  )
}

export default Banner