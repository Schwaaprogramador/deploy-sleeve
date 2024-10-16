import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import { useDispatch  } from "react-redux";
import { ponerCollection } from '../redux/productSlice';
import { Link } from 'react-router-dom';


const Boutique = () => {


  const dispatch = useDispatch();


  return (
    
    <div className='w-screen'>
        <DefaultLayout>

          <div className='flex flex-col lg:flex-row bg-black justify-center w-screen lg:h-[450px]'>

              <div className='bg-boutique w-full h-[200px] lg:h-auto bg-no-repeat bg-cover bg-center flex justify-center items-center '>
                  <Link to="/tienda" className='w-full h-full'>
                    <button onClick={()=> dispatch(ponerCollection('Accesorios'))} className='text-white font-jose text-5xl lg:text-7xl hover:text-black  w-full h-full'>
                      ACCESORIOS
                    </button>    
                  </Link>       
              </div>


              <div className='bg-croche  w-full h-[200px] lg:h-auto bg-no-repeat bg-cover bg-center flex justify-center items-center text-white font-jose text-5xl lg:text-7xl'>
                  <Link to="/tienda" className='w-full h-full'>
                    <button onClick={()=> dispatch(ponerCollection('Croché'))} className='text-white font-jose text-5xl lg:text-7xl hover:text-black  w-full h-full'>
                      CROCHET
                    </button>    
                  </Link>              
              </div>

          </div>

          <div className='flex flex-col lg:flex-row bg-black justify-center w-screen lg:h-[450px]'>

            <div className='bg-seamless  w-full h-[200px] lg:h-auto bg-no-repeat bg-cover flex justify-center items-center text-white font-jose text-5xl lg:text-7xl'>
                  <Link to="/tienda" className='w-full h-full'>
                    <button onClick={()=> dispatch(ponerCollection('Seamless'))} className='text-white font-jose text-5xl lg:text-7xl hover:text-black w-full h-full' >
                      SEAMLESS
                    </button>    
                  </Link>   
            </div>

            <div className='bg-undies  w-full h-[200px] lg:h-auto bg-no-repeat bg-cover flex justify-center items-center text-white font-jose text-5xl '>
                  <Link to="/tienda" className='w-full h-full'>
                    <button onClick={()=> dispatch(ponerCollection('Undies'))} className='text-white font-jose text-5xl lg:text-7xl hover:text-black w-full h-full'>
                      UNDIES
                    </button>    
                  </Link>   
            </div>

          </div>


            <div className='bg-newin bg-center w-screen h-[200px] lg:h-[362px] bg-no-repeat bg-cover flex justify-center items-center text-white font-jose text-5xl lg:text-9xl'>

                  <Link to="/tienda" className='w-full h-full'>
                    <button onClick={()=> dispatch(ponerCollection('New in'))} className='text-white font-jose text-5xl lg:text-7xl hover:text-black w-full h-full'>
                      NEW IN
                    </button>    
                  </Link>  
              
            </div>
        </DefaultLayout>
    </div>
  )
}

export default Boutique