import React from 'react'
import { NavLink } from "react-router-dom";
import { useDispatch  } from "react-redux";
import { ponerId } from '../redux/productSlice';

const Recomendados = ({title, img, id}) => {
  
    const dispatch = useDispatch();

    const setId = () => {        
        dispatch(ponerId(id))
    }

  return (
    <div className='w-[170px] lg:w-[250px] my-10'>

      
          <NavLink to={`/productDetail/${title}`} className='flex flex-col items-center gap-3' onClick={setId}>
                  <div className='h-[45px] flex flex-col items-center justify-center text-center'>
                      <p className='font-path text-2xl'>{title}</p>
                  </div>     
                  <img src={img} className='rounded-2xl'/>
          </NavLink>
        
    </div>
  )
}

export default Recomendados
