import React from 'react'

const Form = () => {
  return (
    <div className='w-screen flex flex-col justify-center items-center'>

        <div className='w-screen flex flex-col justify-normal items-center text-gray-500'>
            <p className='font-path'>Contactanos</p>
            <p className='font-lato'>SLEEVE</p>
            <p>Nos gusta recibirte siempre con lo mejor, por eso llena el siguiente formulario</p>
        </div>

        <div>
            <p>NOMBRE</p>
            <input className='bg-black'></input>
            <p>CEDULA</p>
            <input className='bg-black'></input>
            <p>CORREO</p>
            <input className='bg-black'></input>
            <p>CONTACTO</p>
            <input className='bg-black'></input>
        </div>


    </div>
  )
}

export default Form