import { addItemAlCarrito } from '../shopify/ShopifyFetchs';
import { useSelector  } from "react-redux";
import { useDispatch  } from "react-redux";
import { closeCart, openAlarma, sumarItem } from "../redux/cartSlice";



const Variants = ({id, tittle, img, avaible, altaJoyeria, precio}) => {

    const dispatch = useDispatch();

    const cartId = useSelector(state => state.cart.id); 
    
    const agregarItemAlCarrito = async () => {
      //CERAR EL CARRITO PARA QUE AL ABRIRLO DE NUEVO SE ACTUALICE
        dispatch(closeCart());
        dispatch(sumarItem());
        dispatch(openAlarma());
        await addItemAlCarrito({cartId, variantId:id});
        //alert(`articulo agregado al carrito`);
    }

    const redirectToWhatsApp = () => {
      const phoneNumber = '523127720217';  // Número de teléfono en formato internacional
      const message = '¡Hola! Estoy interesado en más información.';  // Mensaje predefinido
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      // Redirigir a la URL de WhatsApp
      window.location.href = whatsappURL;
    };

  
  return (
    <div className={` flex flex-col items-center justify-center p-5 rounded-3xl gap-2`}>                

                  {tittle}
                  <img src={img} className=' w-[150px] rounded-2xl'/>
                  <p>{precio}</p>
                
                { altaJoyeria ? <button onClick={()=>redirectToWhatsApp()}>Comprar con Asesor</button> 
                : avaible ? 
                <button onClick={()=> agregarItemAlCarrito()} className='rounded-full p-2 font-lato hover:text-blue-500 text-black active:text-white border-2 bg-transparent'>Agregar</button> 
                :
                <p className="p-2 text-red-600 font-lato">Sold Out</p>
                }

                
    </div>
  )
}

export default Variants
