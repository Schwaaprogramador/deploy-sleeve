import { useState } from "preact/hooks"
import { addItemAlCarrito } from '../shopify/ShopifyFetchs';
import { useSelector  } from "react-redux";
import { useDispatch  } from "react-redux";
import { closeCart } from "../redux/cartSlice";



const Variants = ({id, tittle, img}) => {

    const dispatch = useDispatch();

    const cartId = useSelector(state => state.cart.id);
    const [ selected, setSelected ] = useState(false);


    const agregarItemAlCarrito = async () => {
      //CERAR EL CARRITO PARA QUE AL ABRIRLO DE NUEVO SE ACTUALICE
        dispatch(closeCart());
        await addItemAlCarrito({cartId, variantId:id});
        alert(`articulo agregado al carrito`);
    }

    const handlerSelected = () => {
        if(selected) {
            setSelected(false)
        }
        if(selected==false) {
            setSelected(true)
        }
    }
  

  
  return (
    <div className={`${selected ? 'bg-slate-500' : 'bg-slate-50'}  flex flex-col items-center justify-center p-5 rounded-3xl gap-2`}>                

                <button onClick={() => handlerSelected()}>
                  {tittle}
                  <img src={img} className='rounded-xl w-[150px]'/>                
                </button>

                <button onClick={()=> agregarItemAlCarrito()} className='rounded-full p-2 font-lato text-black border-2 bg-transparent'>Agregar</button>
    </div>
  )
}

export default Variants
