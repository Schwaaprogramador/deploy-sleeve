
import { useSelector, useDispatch  } from "react-redux";
import { showNavbar, closeNavbar } from '../redux/navbarSlice';
import { useEffect } from 'preact/hooks';

import Navbar from './Navbar';
import { createCartId, openCart } from "../redux/cartSlice";
import Cart from "./Cart";
import { createCarrito } from '../shopify/ShopifyFetchs';
import Hambur from '../assets/navbarImages/menuHamburguesaNegro.png'
import bag from '../assets/navbarImages/carritoNegro.png'

function Header() {

  const dispatch = useDispatch();
  const navbarShow = useSelector(state => state.navbarStatus);
  const cartShow = useSelector( state => state.cart);
  const cartId = useSelector(state => state.cart.id);


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
    <div className="w-screen fixed bg-white/50 flex justify-between px-10 lg:px-28">

                <div className="text-white p-2">
                       { navbarShow.status ? <Navbar/> : null }

                      <button onClick={() => dispatch(showNavbar())}>
                        { navbarShow.status ? null : <img src={Hambur}/> }              
                      </button>
                </div>
                
                <div className="text-white p-2">
                       { cartShow.status ? <Cart/> : null }

                      <button onClick={() => dispatch(openCart())}>
                        { cartShow.status ? null :  <img src={bag}/> }              
                      </button>
                </div>


    </div>


)
}
export default Header