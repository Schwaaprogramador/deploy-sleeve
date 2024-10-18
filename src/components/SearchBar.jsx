import React from 'react'
import { useDispatch  } from "react-redux";
import { closeSearchBar, setSearchParams } from '../redux/searchSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'preact/hooks';
import lupita from '../assets/iconos/lupaNegra.png'
import { closeNavbar } from '../redux/navbarSlice';
import { closeCart } from '../redux/cartSlice';
import { CiSearch } from "react-icons/ci";


const SearchBar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ search, setSearch ] = useState('');

    const handlerSetSearchParams = () => {
        
        dispatch(setSearchParams(search));
        navigate('/tienda');
    }

    useEffect(()=>{
        dispatch(closeNavbar());
        dispatch(closeCart());
    },[])

  return (
    <div className='overflow-hidden w-screen h-screen bg-black/50 absolute top-0 right-0 flex z-50 items-start justify-center'>
        <form onSubmit={handlerSetSearchParams} className='w-full bg-white h-11 flex items-center justify-center gap-4'>

            
                <input  className='w-1/2 bg-black/20'
                            type="text" 
                            value={search} 
                            onChange={(e) => setSearch(e.target.value)} 
                            placeholder="Buscar..."
                />
                    
                <button type="submit"> 
                    <CiSearch className="text-black text-3xl"/>
                </button>

                <button onClick={()=>dispatch(closeSearchBar())} className='text-black font-jose  text-xl lg:text-5xl flex items-center justify-center'> 
                        x
                </button>
            
            
        </form>

    </div>
  )
}

export default SearchBar