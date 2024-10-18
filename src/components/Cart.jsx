import { useEffect, useState } from 'preact/hooks'
import { closeCart } from '../redux/cartSlice'
import { useDispatch  } from "react-redux";
import { getCarritoCreado, removeItemAlCarrito } from '../shopify/ShopifyFetchs';
import { useSelector  } from "react-redux";
import { closeNavbar } from '../redux/navbarSlice';
import { CiTrash } from "react-icons/ci";

const Cart = () => {

    const dispatch = useDispatch();

    const [ cart, setCart ] = useState('');
    const cartId = useSelector(state => state.cart.id);
   
    console.log(cart)
    console.log(cartId)
    const handleRemoveItem = async (linesId) => {
      console.log(linesId)
      await removeItemAlCarrito({cartId, linesId})
      dispatch(closeCart());
      alert('item eliminado')
    }

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
    <div className='w-screen lg:w-1/3 absolute overflow-auto right-0 top-0 bg-white text-black flex flex-col justify-start items-center px-6 h-screen drop-shadow-xl'>

        <div className='flex w-full flex-row-reverse p-5'>        
              <button onClick={()=> dispatch(closeCart())} className='text-2xl'> X  </button>              
        </div>

        <div className='flex flex-col items-start justify-center gap-2 lg:flex-wrap'> 
          {
          
            cart.lines?.edges ? cart.lines.edges.map( item => (
              <div className='flex flex-col items-center lg:flex-row justify-center gap-2'>
                
                <img src={item.node.merchandise?.image.url} className='w-[150px]'/>
                <p>{item.node.merchandise.title}</p>
                <p>x{item.node.quantity}</p>
                <p>{item.node.merchandise?.price.amount}</p>
                <button onClick={()=>handleRemoveItem(item.node.merchandise?.id)}>
                  <CiTrash  className="text-black text-3xl"/>
                </button>
              </div>

          )) : <p className='text-2xl'>Carrito vacio</p>
          
          }


        </div>


        <div className='w-full flex flex-col items-center justify-center lg:flex-row py-10'>
         
           { cart.cost ? <p className='font-path text-2xl p-2'>Precio Total: {cart.cost?.totalAmount.amount}</p> : <p> Carrito Vacio</p> } 
          
          <a href={cart.checkoutUrl} className='font-jose text-2xl p-2 bg-black text-white rounded-2xl'>Check Out</a>
        </div>
    </div>
  )
}

export default Cart