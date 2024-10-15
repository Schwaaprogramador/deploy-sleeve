import React from 'react'
import { Link } from 'react-router-dom'
import ojito from '../assets/news/ojo_nav.png'



const Footer = () => {
  return (
    <div className="w-screen h-[300px] gap-3 lg:h-[200px] bg-white bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start py-10 text-black font-lato text-xs">
       
       {/* <div className='flex gap-4'>
          <input placeholder='Correo Electronico'/>
          <button className='bg-white/50 rounded-3xl px-2'>SUSCRIBIRSE</button>
       </div> */}

       <div className='flex flex-col lg:flex-row lg:gap-6'>

        <Link to='/concurso'>Términos y condiciones</Link>
        
       </div>

       
       <div className='flex flex-col lg:flex-row lg:gap-6'>

        <p>PQRSD</p>
        
       </div>

       <div className='flex flex-col lg:flex-row lg:gap-6'>
        <a href="">+57 3504651680</a>
       </div>

       <div className='flex flex-col lg:flex-row lg:gap-6'>
        <a href="">Edificio La Ceiba, Medellín - Colombia</a>
       </div>

       <div className="flex justify-center items-center">
          <img src={ojito} className="w-20"/>
        </div>

    </div>
  )
}

export default Footer
