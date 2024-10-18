import { useEffect, useState } from 'preact/hooks'
import { closeCart, restarItem } from '../redux/cartSlice'
import { useDispatch  } from "react-redux";
import { getCarritoCreado, removeItemAlCarrito } from '../shopify/ShopifyFetchs';
import { useSelector  } from "react-redux";
import { closeNavbar } from '../redux/navbarSlice';
import { CiTrash } from "react-icons/ci";



function addCommas(nStr){
  nStr += '';
	let x = nStr.split('.');
	let x1 = x[0];
	let x2 = x.length > 1 ? '.' + x[1] : '';
	let rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}




const Cart = () => {

    const dispatch = useDispatch();

    const [ cart, setCart ] = useState('');
    const cartId = useSelector(state => state.cart.id);

    
    const handleRemoveItem = async (lineIds) => {
      const res = await removeItemAlCarrito({cartId, lineIds});
      dispatch(restarItem());
      getCarrito();      
    }

    
    const getCarrito = async () => {
      const carrito = await getCarritoCreado({id:cartId})
      if(carrito){         
       setCart(carrito.data.cart)        
      }
    }


  useEffect(() => {

    dispatch(closeNavbar());

     if(cartId){
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
            cart.lines?.nodes ? cart.lines.nodes.map( item => (
              <div className='flex flex-col items-center lg:flex-row justify-center gap-2'>                
                <img src={item.merchandise?.image.url} className='w-[150px]'/>
                <p>{item.merchandise.title}</p>
                <p>x{item.quantity}</p>
                <p> ${addCommas(item.merchandise?.price.amount)}</p>
                <button onClick={()=>handleRemoveItem(item.id)}>
                  <CiTrash  className="text-black text-3xl"/>
                </button>
              </div>

          )) : <p className='text-2xl'>Carrito vacio</p>
          
          }


        </div>


        <div className='w-full flex flex-col items-center justify-center lg:flex-row py-10'>
         
           { cart?.lines?.nodes?.length ? <p className='font-path text-2xl p-2'>Precio Total: {cart.cost?.totalAmount.amount}</p> : <p className='font-path text-3xl'> Carrito Vacio</p> } 
          
          {cart?.lines?.nodes?.length ?
          <a href={cart.checkoutUrl} className='font-jose text-2xl p-2 bg-black text-white rounded-2xl'>Check Out</a> : null }
          
          
        </div>
    </div>
  )
}

export default Cart