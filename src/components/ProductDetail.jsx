import { useState, useEffect } from 'preact/hooks'
import { fetchProductoDetail, productRecomendados } from '../shopify/ShopifyFetchs';
import { useSelector  } from "react-redux";
import DefaultLayout from '../layouts/DefaultLayout';
import Variants from './Variants';
import { useNavigate } from 'react-router-dom';
import Recomendados from './Recomendados';



const ProductDetail = () => {

  const navigate = useNavigate();
  const idDetail = useSelector(state => state.product.id);
  const [ producto , setProducto ] = useState('')
  const [ recomendados , setRecomendados ] = useState('');


  useEffect(() => {
    
    window.scrollTo(0, 0);

    if(!idDetail){
      navigate('/tienda');
    }
    
    const feche = async () => {
      const productoFeche = await fetchProductoDetail({id:idDetail})
      if(productoFeche){        
        setProducto(productoFeche.data?.product)
      }
    }
    
    feche();

    const recomendadosProductos = async ()=>{
      const productoFeche = await productRecomendados({productId:idDetail})
      if(productoFeche){        
        setRecomendados(productoFeche.data?.productRecommendations)
      }
    }
    recomendadosProductos();


  }, [idDetail])
  
  
  
  return (
      <DefaultLayout>
        <div className=' flex flex-col justify-center items-center'>

          <div className='flex flex-col lg:flex-row lg:my-16 lg:w-[1000px]'>

              <img src={producto?.images?.nodes[0].url} className='w-screen lg:w-[500px] '/>

              <div className='w-screen my-10 flex flex-col justify-center items-center'>
                <p className='text-2xl lg:text-6xl font-jose text-black'>{producto.title}</p>
                <p className='p-10'>{producto.description}</p>        
              </div>

          </div>


            {/* <p className='text-3xl font-lato text-black'>Variantes</p> */}
            
            <div className='flex flex-wrap'>   

              { producto ? producto.variants.nodes.map( item => (                         
               
                <Variants tittle={item.title} img={item.image.url} id={item.id}/>
      
              )) : <p>cargando</p>}

            </div>


            <div className='my-10'>
              { producto?.images?.nodes.map( item => <img src={item.url} className='lg:w-[800px]' loading="lazy"/>)}

            </div>
            


              <p className='font-jose text-2xl lg:text-3xl p-5'>RECOMENDADOS</p>
            <div className='flex flex-wrap justify-center gap-5'>             
              { recomendados ? recomendados.map( item => (                
                <Recomendados title={item.title} img={item.images.nodes[0].url} id={item.id}/>
              
              )) : <p>Cargando recomendados</p>

              }
            </div>
            
            
        </div>
    </DefaultLayout>
  )
}

export default ProductDetail
