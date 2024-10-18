import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Scroll from '../helpers/Scroll';
import whatapp from '../assets/news/whatsapp.png'

const redirectToWhatsApp = () => {
  const phoneNumber = '573504651680';  // Número de teléfono en formato internacional
  const message = '¡Hola! Estoy interesado en más información.';  // Mensaje predefinido
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  // Redirigir a la URL de WhatsApp
  window.location.href = whatsappURL;
};

const DefaultLayout = ({children}) => {
  return (
    <div className='w-svw overflow-hidden'> 
      <Scroll/>

      <Header/>
      
        <div>
            {children}
        </div>

        <div className='fixed bottom-2 right-2'>
          <button onClick={()=>redirectToWhatsApp()}>
            <img src={whatapp} className='w-14 hover:w-16 active:w-12'/>
          </button>
        </div>

      <Footer/>
    </div>  
  )
}

export default DefaultLayout
