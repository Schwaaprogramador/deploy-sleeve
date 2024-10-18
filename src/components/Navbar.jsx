import React from 'react'
import { closeNavbar } from '../redux/navbarSlice.js';
import { useDispatch  } from "react-redux";
import { Link } from 'react-router-dom';
import { useEffect } from 'preact/hooks';
import { closeCart } from '../redux/cartSlice.js';



const Navbar = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(closeCart());
    },[])

  return (
    <div className='w-[250px] h-screen lg:h-screen  lg:w-[30%] left-0 top-0 fixed bg-white text-black flex flex-col px-6'>

            <div className='w-full'>
                <button onClick={()=> dispatch(closeNavbar())} className='pt-9'>
                    X
                </button>
            </div>

      <div className='w-full flex flex-col justify-center items-center gap-7'>
          <Link to="/" className='font-lato text-2xl'>Inicio</Link>
          <Link to="/tienda" className='font-lato text-2xl'>Tienda</Link>
          <Link to="/boutique" className='font-lato text-2xl'>Boutique</Link>
          <Link to="/joyeria" className='font-lato text-2xl'>Joyeria</Link>
          <Link to="/perfume" className='font-lato text-2xl'>Perfume</Link>
          <Link to="/convocatoria" className='font-lato text-2xl text-center'>Convocatoria Joyería</Link>
          {/* <Link to="/gifts">Gifts</Link> */}
          {/* <Link to="/form" className='font-jose text-2xl'>form</Link> */}
      </div>

</div>
  )
}

export default Navbar
