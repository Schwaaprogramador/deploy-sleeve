import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'


const Joyeria = () => {
  
    const redirectToWhatsApp = () => {
      const phoneNumber = '523127720217';  // Número de teléfono en formato internacional
      const message = '¡Hola! Estoy interesado en más información.';  // Mensaje predefinido
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      // Redirigir a la URL de WhatsApp
      window.location.href = whatsappURL;
    };
  

  return (
    <div className='w-screen'>
        <DefaultLayout>
            <div className='w-screen h-[422px] bg-cover lg:h-[500px] bg-no-repeat bg-joyeria-alta lg:bg-pc_joyeria-alta flex justify-center items-center text-white font-jose text-5xl'>
                <button onClick={redirectToWhatsApp}>
                  ALTA JOYERIA
                </button>
              </div>
            <div className='w-screen h-[422px] bg-cover lg:h-[500px] bg-no-repeat bg-joyeria lg:bg-pc_joyeria flex justify-center items-center text-white font-jose text-5xl'>JOYERIA</div>

        </DefaultLayout>
    </div>
  )
}

export default Joyeria