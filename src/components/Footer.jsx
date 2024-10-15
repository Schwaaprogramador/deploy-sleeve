import React from 'react'
import { Link } from 'react-router-dom'
import ojito from '../assets/news/ojo_nav.png'
import iconIg from "../assets/news/ig.png";
import iconTiktok from "../assets/news/tiktok.png";


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


        <div className='flex gap-6'>        

          <div class=" flex xl:flex-row items-center">
            <img src={iconIg} alt="icono de instagram" class="w-8"/>				
          </div>

          <div class=" flex xl:flex-row items-center">
            <img src={iconTiktok} alt="icono de tiktok" class="w-8"/>
          </div>
        </div>

    </div>
  )
}

export default Footer
