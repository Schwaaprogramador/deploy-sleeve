import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import { ponerCollection } from '../redux/productSlice';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch  } from "react-redux";

const Joyeria = () => {


  const dispatch = useDispatch();


   
  

  return (
    <div className='w-screen'>
        <DefaultLayout>
            <div className='w-screen h-[422px] bg-cover lg:h-[500px] bg-no-repeat bg-joyeria-alta lg:bg-pc_joyeria-alta flex justify-center items-center text-white font-jose text-5xl lg:text-8xl'>
                  <Link to="/tienda">
                    <button onClick={()=> dispatch(ponerCollection('Alta joyería'))} className='text-white font-jose text-5xl lg:text-8xl hover:text-black'>
                      ALTA JOYERÍA
                    </button>    
                  </Link>   

              </div>


            <div className='w-screen h-[422px] bg-cover lg:h-[500px] bg-no-repeat bg-joyeria lg:bg-pc_joyeria flex justify-center items-center text-white font-jose text-5xl lg:text-8xl'>
            <Link to="/tienda">
                    <button onClick={()=> dispatch(ponerCollection('Joyería'))} className='text-white font-jose text-5xl lg:text-8xl hover:text-black'>
                      JOYERÍA
                    </button>    
                  </Link> 
              </div>

        </DefaultLayout>
    </div>
  )
}

export default Joyeria