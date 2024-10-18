import React from 'react'
import { useDispatch  } from "react-redux";
import { closeSearchBar, setSearchParams } from '../redux/searchSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'preact/hooks';
import { closeNavbar } from '../redux/navbarSlice';
import { closeCart } from '../redux/cartSlice';
import { CiSearch } from "react-icons/ci";
import { useMatch } from 'react-router-dom';





const SearchBar = () => {

    const match = useMatch("/tienda");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [ search, setSearch ] = useState('');
    
    const handlerSetSearchParams = () => {
        
        dispatch(setSearchParams(search));
        if(match == null){
            navigate('/tienda');
        }
    }

    useEffect(()=>{
        dispatch(closeNavbar());
        dispatch(closeCart());
    },[])

  return (
    <div className='overflow-hidden w-svw h-screen bg-black/50 absolute top-0 right-0 flex z-50 items-start justify-center'>
        <div  className='w-full bg-white h-16 flex items-center justify-center gap-4'>

            
                <input  className='w-1/2 bg-black/20'                           
                            type="text" 
                            value={search} 
                            onChange={(e) => setSearch(e.target.value)} 
                            placeholder="Buscar..."
                />

                   
                <button onClick={handlerSetSearchParams}> 
                    <CiSearch className="text-black text-3xl active:text-2xl"/>
                </button>
                

                <button onClick={()=>dispatch(closeSearchBar())} className='text-black font-jose  text-2xl lg:text-5xl flex items-center justify-center'> 
                        x
                </button>
            
            
        </div>

    </div>
  )
}

export default SearchBar