
import { useSelector, useDispatch  } from "react-redux";
import { showNavbar, closeNavbar } from '../redux/navbarSlice';
import { useEffect } from 'preact/hooks';
import ojito from '../assets/news/ojo_nav.png'
import Navbar from './Navbar';
import { closeCart, createCartId, openCart } from "../redux/cartSlice";
import Cart from "./Cart";
import { createCarrito } from '../shopify/ShopifyFetchs';
import Hambur from '../assets/navbarImages/menuHamburguesaNegro.png'
import bag from '../assets/navbarImages/carritoNegro.png'
import Alerta from "../helpers/Alerta";
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";
import { showSearchBar } from "../redux/searchSlice";
import lupita from "../assets/iconos/lupaNegra.png"


function Header() {


  const dispatch = useDispatch();
  const navbarShow = useSelector(state => state.navbarStatus);
  const cartShow = useSelector( state => state.cart);
  const cartId = useSelector(state => state.cart.id);
  const contador = useSelector(state => state.cart.items);
  const alarma = useSelector(state => state.cart.alarma);
  const searchBar = useSelector(state => state.searchBar.status);


  const handlerLupita = () => {
    dispatch(closeNavbar());
    dispatch(closeCart());
  }
  useEffect(()=>{

    dispatch(closeNavbar());

     if(!cartId){

       const carritoNuevo = async () => {
         const carrito = await createCarrito()
         if(carrito){   
           dispatch(createCartId(carrito.data.cartCreate.cart.id));
           localStorage.setItem('cartId', carrito.data.cartCreate.cart.id);
           localStorage.setItem('checkoutURL', carrito.data.cartCreate.cart.checkoutUrl);
         }
       }
       carritoNuevo();

     }

  },[]);


  return (
    <div className="w-screen fixed bg-white/50 flex justify-between lg:px-10 top-0">

                <div className="text-white p-2">
                       { navbarShow.status ? <Navbar/> : null }

                      <button onClick={() => dispatch(showNavbar())}>
                        { navbarShow.status ? null : <img src={Hambur}/> }              
                      </button>
                </div>

                <div className="flex justify-center items-center">
                  <Link to="/">                
                    <img src={ojito} className="w-20"/>
                  </Link>
                </div>
                
                <div className="text-white p-2 flex justify-end items-center">
                      { searchBar ? <SearchBar/> : 
                        <div>
                          <button onClick={()=>dispatch(showSearchBar())}>
                            <img src={lupita}/>
                          </button>
                        </div>
                      }

                      { cartShow.status ?  <Cart/> : null } 

                    <button onClick={() => dispatch(openCart())}>
                      { cartShow.status ? null :  
                      <div className="flex gap-0">
                        {contador !=0 ? <p className="bg-red-700 h-5 w-5 rounded-full flex items-center justify-center">{contador}</p> : null }
                        <img src={bag}/> 
                      </div>                      
                      }             
                    </button>                     

                </div>
                
             
                { alarma ? <Alerta/> : null }
               


    </div>


)
}
export default Header