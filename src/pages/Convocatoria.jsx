import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'

const Convocatoria = () => {

   

  return (
    <div className='w-svw flex flex-col items-center justify-center gap-5 my-20'>
        <DefaultLayout>
                <div className='w-full flex items-center justify-center'>
                    <p className='font-path text-6xl'>CONVOCATORIA JOYERÍA</p>
                </div>

                <div className='w-full flex flex-col items-center justify-center py-10'>
                    <img src="https://res.cloudinary.com/drnryofoj/image/upload/v1729266659/Sleeve/cb0mfhgm5eephpskhvz1.jpg" 
                    alt="imagen sleeve boutique"
                    className='lg:w-1/2'
                    />
                    <div className='flex justify-center items-center flex-col px-20 py-10 gap-5'>
                        <p className='text-3xl font-path'>OBJETO CONVOCATORIA</p>
                        <p className='text-sm font-lato w-72 lg:w-96'>Buscamos la energía activa que pueda atrapar 
                            nuestra esencia en una pieza que nos represente en materia y espíritu, 
                            un diseño único de nuestra marca creado por ti.</p>
                        <a  href="https://docs.google.com/forms/d/e/1FAIpQLSemdp0QQjfXkamP4jO5sXDQAoo3dz7xH06EKOk0iDd58PD_kg/viewform" 
                            target='blank' 
                            className='bg-black flex justify-center items-center text-white p-3 font-jose text-xl hover:p-2 active:p-1'>                    
                            Participa
                        </a>
                    </div>
                </div>

                <div>
                    <img src="https://res.cloudinary.com/drnryofoj/image/upload/v1729267199/Sleeve/qom728vhqoul9fpmmfa8.jpg "/>
                </div>

                <div className='flex justify-center items-center flex-col px-20 py-10 gap-16'>
                    <h3 className='text-3xl font-path'>¿Sientes el llamado?</h3>
                    <div className='flex flex-col w-72'>
                        <p>
                        1. Diligencia el siguiente formulario.<br/>
                        2. Recibirás un correo de confirmación.<br/>
                        3. Propuestas hasta el noviembre 30.<br/>
                        4. Tu propuesta debe incluir:<br/>
                            <div className='w-full flex justify-center'>
                            a. Tu intención creativa.<br/>
                            b. Propuesta de diseño.<br/>
                            c.  Un key visual.<br/>

                            </div>
                        </p>
                </div>

                    <a  href="https://docs.google.com/forms/d/e/1FAIpQLSemdp0QQjfXkamP4jO5sXDQAoo3dz7xH06EKOk0iDd58PD_kg/viewform" 
                        target='blank' 
                        className='bg-black flex justify-center items-center text-white p-3 font-jose text-xl hover:p-2 active:p-1'>                    
                            Participa
                    </a>

                </div>

                <div>
                    <img src='https://res.cloudinary.com/drnryofoj/image/upload/v1729267199/Sleeve/mbd1vmjse5qei6uncwec.jpg'/>
                </div>

        </DefaultLayout>


    </div>
  )
}

export default Convocatoria