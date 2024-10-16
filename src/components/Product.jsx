import React from 'react'
import { NavLink } from "react-router-dom";
import { useDispatch  } from "react-redux";
import { ponerId } from '../redux/productSlice';

const Product = ({id, title, precio, img}) => {
    const dispatch = useDispatch();

    const setId = () => {
        dispatch(ponerId(id))
    }

    const uri = encodeURIComponent(id);
    
  return (
    <div className='w-[170px] mt-9 lg:w-[350px]'>
            <NavLink to={`/productDetail/${uri}`} className='flex flex-col items-center gap-3' onClick={setId}>
                <img src={img} className='rounded-2xl' loading="lazy"/>
                <div className='h-[45px] flex flex-col items-center justify-center text-center'>
                    <p className='font-path text-2xl'>{title}</p>
                </div>
                <p className='font-lato text-xl'>{ precio }</p>
            </NavLink>

    </div>
  )
}

export default Product