import React from 'react'
import Products from '../components/Products'
import DefaultLayout from '../layouts/DefaultLayout'


const Tienda = () => {
  return (
    <DefaultLayout>
        <div className='mb-20'>

            <div class="bg-homeFirtsSection bg-fixed bg- lg:bg-center bg-cover w-screen h-[350px] flex flex-col justify-center items-center">                            
                    <p class="font-jose text-white text-5xl">TIENDA</p>                
            </div> 

            <div>
                <Products />
            </div>

        </div>
    </DefaultLayout>
  )
}

export default Tienda
