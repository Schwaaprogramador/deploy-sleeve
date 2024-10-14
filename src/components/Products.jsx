import { fetchProductos, filterProducts, getCategorias, searchProducts } from '../shopify/ShopifyFetchs'
import { useEffect, useState } from 'react'
import Product from './Product';
import { useSelector  } from "react-redux";
import lupita from "../assets/iconos/lupaNegra.png"

const Products = () => {


    const [ products, setProducts ] = useState('');
    const [ filteredProducts, setFilteredProducts ] = useState('');
    const [ collection , setCollection ] = useState('');
    const [ selectedValue, setSelectedValue ] = useState('');
    const collectionValue = useSelector(state => state.product.collectionValue);
    const [ searchParams , setSearchParams ] = useState('');

    console.log(filteredProducts)

    const handleChange = async (event) => {

      setSelectedValue(event.target.value);
      setSearchParams('');
      const productosFiltered = await filterProducts({collection:event.target.value});
      if(productosFiltered){
        setFilteredProducts(productosFiltered.data.collections.nodes);
      }

    };


    const searchHandle = async () => {

      setSelectedValue('');
      const productosFiltered = await searchProducts({query:searchParams});
      if(productosFiltered.data?.search?.nodes.length==''){

        alert('No se encontro ningun producto');
        setSearchParams('');
      }    
      if(productosFiltered){
        setFilteredProducts(productosFiltered.data?.search?.nodes);        
      }      
      
    }

    const handleSearch = (e) => {
      setSearchParams(e.target.value);
    };



    useEffect(()=>{

      if(collectionValue) {
          const checkCollection =async()=>{       
            setSelectedValue(collectionValue);
            const productosFiltered = await filterProducts({collection:collectionValue});  
            if(productosFiltered){
              setFilteredProducts(productosFiltered.data.collections.nodes);
            }
          }
        
          checkCollection();

      } else {
              
          const feche = async () => {
            const productos =  await fetchProductos();
            if(productos){
              setProducts(productos.data?.products.nodes)
            }
            
          }
          feche();

      }    
     
        const fecheCollection = async () => {
          const collections =  await getCategorias()
          if(collections) {
            setCollection(collections.data.collections)
          }
        }
        fecheCollection();


    },[])



    
  return (
    <div className='flex flex-col items-center justify-center gap-3 mt-5'>

      <div className='flex flex-col lg:flex-row gap-10'>

        <div className='flex gap-10'>
          <label for="pet-select">Choose a filter:</label>
          <select value={selectedValue} name="filter" onChange={handleChange}>
            {collection ? collection.nodes.map(item => <option value={item.title}>{item.title}</option>) : <p>cargando</p>}
          </select>

        </div>

          <div className='flex gap-2'>
        <input 
          onChange={handleSearch} 
          type='text'
           placeholder="Buscar..." 
           className='bg-slate-700/20 text-black rounded-2xl p-1' 
           value={searchParams}/>

        <button className='font-lato text-2xl' onClick={()=>searchHandle()}>
          <img src={lupita}/>
        </button>

      </div>
          
      </div>


    


    {/* TODOS LOS PRODUCTOS------------- */}
      <div className='grid grid-cols-2 items-center justify-center gap-3 lg:grid-cols-3 lg:gap-10'>
            { products && filteredProducts == '' ? 
            
                products.map( item => (
                    <Product 
                          id={item.id}
                          title={item.title}
                          precio={item.variants.nodes[0].price.amount}
                          img={item.images.nodes[0].url}
                    />                    
                )) : null
            } 
      </div>

            {/* TODOS LOS filter------------- */}
      <div className='grid grid-cols-2 items-center justify-center gap-3 lg:grid-cols-3 lg:gap-10'>
                { filteredProducts && selectedValue && searchParams=='' ? 

                    filteredProducts[0]?.products?.nodes.map( item => (
                      <Product 
                            id={item.id}
                            title={item.title}
                            precio={item.variants.nodes[0].price.amount}
                            img={item.images.nodes[0].url}
                      />
                      
                  )) : null
                }
       </div>


          {/* TODOS LOS buscar------------- */}
       <div className='grid grid-cols-2 items-center justify-center gap-3 lg:grid-cols-3 lg:gap-10'>
                { filteredProducts && searchParams && selectedValue=='' ? 

                    filteredProducts?.map( item => (
                      <Product 
                            id={item.id}
                            title={item.title}
                            precio={item.variants.nodes[0].price.amount}
                            img={item.images.nodes[0].url}
                      />
                      
                  )) : null
                }
       </div>

    </div>
  )
}

export default Products;
