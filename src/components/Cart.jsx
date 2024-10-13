import { useEffect, useState } from 'preact/hooks'
import { closeCart } from '../redux/cartSlice'
import { useDispatch  } from "react-redux";
import { getCarritoCreado } from '../shopify/ShopifyFetchs';
import { useSelector  } from "react-redux";
import { closeNavbar } from '../redux/navbarSlice';


const Cart = () => {

    const dispatch = useDispatch();

    const [ cart, setCart ] = useState('');
    const cartId = useSelector(state => state.cart.id);
    console.log(cartId)

  useEffect(() => {

    dispatch(closeNavbar());

     if(cartId){

       const getCarrito = async () => {
         const carrito = await getCarritoCreado({id:cartId})
         if(carrito){         
          setCart(carrito.data.cart)        
         }
       }
       getCarrito();

     }
  
  }, [])


  return (
    <div className='w-1/2 absolute mt-8 right-0 bg-slate-600/70 text-gray-200 flex flex-col rounded-3xl px-6'>

        <div className='flex w-full flex-row-reverse'>
        
              <button onClick={()=> dispatch(closeCart())} className='text-2xl'>
                    X
              </button>
              
        </div>

        <div>

          {cart.lines?.edges ? cart.lines.edges.map( item => (
            <div className='flex flex-col items-center'>
              <p>{item.node.estimatedCost?.totalAmount.amount}</p>
              <img src={item.node.merchandise?.image.url} className='w-[100px] rounded-3xl'/>
              <p>{item.node.merchandise.title}</p>
            </div>

          )) : <p>Carrito vacio</p>}


        </div>


        <div className='flex flex-col items-center'>
          <p className='font-jose text-2xl p-2'>Precio Total</p>
          <a href={cart.checkoutUrl} className='font-jose text-2xl p-2'>Check Out</a>
        </div>
    </div>
  )
}

export default Cart