import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import { useSelector, useDispatch  } from "react-redux";
import { ponerCollection } from '../redux/productSlice';
import { Link } from 'react-router-dom';


const Boutique = () => {


  const dispatch = useDispatch();


  return (
    
    <div className='w-screen'>
        <DefaultLayout>

          <div className='flex flex-col lg:flex-row bg-black justify-center w-screen lg:h-[450px]'>

              <div className='bg-boutique lg:bg-pc_accesorios w-full h-[150px] lg:h-auto bg-no-repeat bg-cover bg-center flex justify-center items-center '>
                  <Link to="/tienda">
                    <button onClick={()=> dispatch(ponerCollection('Accesorios'))} className='text-white font-jose text-5xl hover:text-black'>
                      ACCESORIOS
                    </button>    
                  </Link>       
              </div>


              <div className='bg-croche lg:bg-pc_croche w-full h-[150px] lg:h-auto bg-no-repeat bg-cover flex justify-center items-center text-white font-jose text-5xl'>
                  <Link to="/tienda">
                    <button onClick={()=> dispatch(ponerCollection('Croché'))} className='text-white font-jose text-5xl hover:text-black'>
                      CROCHET
                    </button>    
                  </Link>              
              </div>

          </div>

          <div className='flex flex-col lg:flex-row bg-black justify-center w-screen lg:h-[450px]'>

            <div className='bg-seamless lg:bg-pc_seamless w-full h-[150px] lg:h-auto bg-no-repeat bg-cover flex justify-center items-center text-white font-jose text-5xl'>
                  <Link to="/tienda">
                    <button onClick={()=> dispatch(ponerCollection('Seamless'))} className='text-white font-jose text-5xl hover:text-black'>
                      SEAMLESS
                    </button>    
                  </Link>   
            </div>

            <div className='bg-undies lg:bg-pc_undies w-full h-[150px] lg:h-auto bg-no-repeat bg-cover flex justify-center items-center text-white font-jose text-5xl'>
                  <Link to="/tienda">
                    <button onClick={()=> dispatch(ponerCollection('Undies'))} className='text-white font-jose text-5xl hover:text-black'>
                      UNDIES
                    </button>    
                  </Link>   
            </div>

          </div>


            <div className='bg-newin lg:bg-pc_new-in w-screen h-[150px] lg:h-[362px] bg-no-repeat bg-cover flex justify-center items-center text-white font-jose text-5xl lg:text-9xl'>

                  <Link to="/tienda">
                    <button onClick={()=> dispatch(ponerCollection('New in'))} className='text-white font-jose text-5xl lg:text-9xl hover:text-black'>
                      NEW IN
                    </button>    
                  </Link>  
              
            </div>
        </DefaultLayout>
    </div>
  )
}

export default Boutique