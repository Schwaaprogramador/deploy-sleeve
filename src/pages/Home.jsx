import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <DefaultLayout>
        <div class="w-svw overflow-hidden flex flex-col justify-center items-center ">

                {/* <!-- ------PRIMERA SECCION-------- --> */}
                <div class="bg-homeInscribete bg-cover w-svw overflow-hidden h-[500px]  lg:h-screen flex justify-center items-end">
                    <Link to="/convocatoria" className='flex justify-center mb-28 items-center text-white font-jose text-4xl lg:text-8xl hover:text-black'>                    
                        CONVOCATORIA
                    </Link>
                </div>
           
                {/* <!-- ------PRIMERA SECCION-------- --> */}
                <div class="bg-homeFirtsSection  bg-center bg-cover w-full h-[500px] lg:h-screen flex justify-center items-center">
                    <Link to="/tienda" className='flex justify-center mb-28 items-center text-white font-jose text-5xl lg:text-8xl hover:text-black'>                    
                        SHOP NOW
                    </Link>
                </div>
                

                {/* <!-- ------SEGUNDA SECCION-------- --> */}
                <div class="bg-homeSecondSection bg-center lg:w-screen lg:h-screen lg:bg-center bg-cover w-full h-[500px] flex justify-center items-center">
                    <Link to="/boutique" className='flex justify-center items-center text-white font-jose lg:text-8xl text-5xl hover:text-black'>                    
                        BOUTIQUE
                    </Link>
                </div>



                {/* <!-- ------TERCERA SECCION-------- --> */}
                <div class="bg-homeThirdSection bg-no-repeat bg-center bg-cover lg:w-screen lg:h-screen w-full h-[500px] flex justify-center items-center">
                    <Link to="/joyeria" className='flex justify-center items-center text-white font-jose lg:text-8xl text-5xl hover:text-black'>                    
                        JOYERIA
                    </Link>    
                </div>

                {/* <!-- ------CUARTA SECCION-------- --> */}
                <div class="bg-homeFourSection lg:w-screen lg:h-screen lg:bg-cover bg-cover w-full h-[500px] flex justify-center items-center">
                    <Link to="/perfume" className='flex justify-center items-center text-white font-jose lg:text-8xl text-5xl hover:text-black'>                    
                        PERFUME
                    </Link>
                </div>


                {/* <!-- ------QUINTA SECCION-------- -->
                <div class="bg-homeFiveSection lg:bg-homePCFiveSection lg:w-screen lg:h-[400px] lg:bg-cover bg-cover w-full h-[500px] flex justify-center items-center">
                    <Link to="/form" className='flex justify-center items-center text-white font-jose lg:text-8xl text-5xl hover:text-black'>                    
                        Contactanos
                    </Link>
                </div> */}
        
        
        </div>
    </DefaultLayout>
  )
}

export default Home
