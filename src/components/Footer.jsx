import React from 'react'
import { Link } from 'react-router-dom'
import ojito from '../assets/news/ojo_nav.png'
import iconIg from "../assets/news/ig.png";
import iconTiktok from "../assets/news/tiktok.png";


const redirectToWhatsApp = () => {
  const phoneNumber = '573504651680';  // Número de teléfono en formato internacional
  const message = '¡Hola! Estoy interesado en más información.';  // Mensaje predefinido
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  // Redirigir a la URL de WhatsApp
  window.location.href = whatsappURL;
};



const Footer = () => {
  return (
    <div className="w-svw h-[300px] gap-3 lg:h-[200px] bg-white bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start py-10 text-black font-lato text-xs">

      <div className="flex justify-center items-center">
          <img src={ojito} className="w-20"/>
      </div> 

      <div className='flex gap-6'>

        <div class=" flex xl:flex-row items-center">
          <a href="https://www.instagram.com/sleevejoyeria/?hl=es">
          <img src={iconIg} alt="icono de instagram" class="w-5"/>	
          </a>			
        </div>

        <div class=" flex xl:flex-row items-center">
          <a href="https://www.instagram.com/sleeveboutique/?hl=es">
          <img src={iconIg} alt="icono de instagram" class="w-5"/>
          </a>				
        </div>

        <div class=" flex xl:flex-row items-center">
          <a href="https://www.instagram.com/sleeveconcept/">
          <img src={iconIg} alt="icono de instagram" class="w-5"/>
          </a>				
        </div>
        
        <div class=" flex xl:flex-row items-center">
        <a href="https://www.tiktok.com/@sleeveconcept">
          <img src={iconTiktok} alt="icono de instagram" class="w-5"/>
          </a>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row lg:gap-6'>
        <button onClick={()=>redirectToWhatsApp()}>
          <p>+57 3504651680</p>
        </button>
      </div>

       <div className='flex flex-col lg:flex-row lg:gap-6'>
        <a href="">Edificio La Ceiba, Medellín - Colombia</a>
       </div>

      <div className='flex flex-col lg:flex-row lg:gap-10 items-center gap-3'>

        <div className='flex flex-col lg:flex-row lg:gap-6'>
          <Link to='/terminos'>Terms of Service</Link>        
        </div>
        <div className='flex flex-col lg:flex-row lg:gap-6'>
          <Link to='/refund'>Refund policy</Link>        
        </div>
        <div className='flex flex-col lg:flex-row lg:gap-6'>
          <Link to='/shipping'>Shipping policy</Link>        
        </div>       
        <div className='flex flex-col lg:flex-row lg:gap-6'>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSdp-3OL0na9tyOARMq5DGqywl06wMgvxH4wngW1WBQB4GSe7w/viewform'>PQRSD</a>        
        </div>

      </div>   

    </div>
  )
}

export default Footer
