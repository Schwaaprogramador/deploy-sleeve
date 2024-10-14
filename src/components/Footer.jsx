import React from 'react'

const Footer = () => {
  return (
    <div className="w-screen h-[500px] lg:h-[300px] bg-slate-600 bg-footerMobile lg:bg-footerPC bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start py-10 text-white font-lato">
       
       {/* <div className='flex gap-4'>
          <input placeholder='Correo Electronico'/>
          <button className='bg-white/50 rounded-3xl px-2'>SUSCRIBIRSE</button>
       </div> */}

       <div className='flex flex-col lg:flex-row lg:gap-6'>
        <p>Rastrear mi pedido</p>
        <p>Tarjetas de Regalo</p>       
        <p>Terminos y condiciones</p>
        <p>PQRSD</p>
       </div>

       <div className='flex flex-col lg:flex-row lg:gap-6'>
        <a href="">+57 3504651680</a>
       </div>

    </div>
  )
}

export default Footer
