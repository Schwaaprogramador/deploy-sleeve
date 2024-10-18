import { fetchProductos, filterProducts, getCategorias, searchProducts } from '../shopify/ShopifyFetchs'
import { useEffect, useState } from 'react'
import Product from './Product';
import { useSelector, useDispatch  } from "react-redux";
import lupita from "../assets/iconos/lupaNegra.png"
import { closeSearchBar, setSearchParams } from '../redux/searchSlice';





const Products = () => {

    const dispatch = useDispatch()

    const [ products, setProducts ] = useState('');
    const [ filteredProducts, setFilteredProducts ] = useState('');
    const [ collection , setCollection ] = useState('');//todos los selecct
    const [ selectedValue, setSelectedValue ] = useState('');//Filtro selectionado    
    const collectionValue = useSelector(state => state.product.collectionValue); //Enlaces de afuera que filtran aca

    const searchParams = useSelector(state => state.searchBar.searchParams);//parametros de busqueda


    const clearSelectedValue = () => {
      setSelectedValue('');
      setFilteredProducts('');
      dispatch(setSearchParams(''));     
      feche();
    }


      //Filtros
    const handleChange = async (event) => {

      setSelectedValue(event.target.value);
      dispatch(setSearchParams(''));
      const productosFiltered = await filterProducts({collection:event.target.value});
      if(productosFiltered){
        setFilteredProducts(productosFiltered.data.collections.nodes);
      }
    };


    //Busqueda
    const searchHandle = async (param) => {
      
      setSelectedValue('');      

      const productosFiltered = await searchProducts({query:param});
      if(productosFiltered.data?.search?.nodes.length==''){
        alert('No se encontro ningun producto');
        dispatch(setSearchParams(''));
      }    
      if(productosFiltered){
        setFilteredProducts(productosFiltered.data?.search?.nodes);        
      }      
      
    }


    const feche = async () => {
      const productos = await fetchProductos();
      if(productos){
        setProducts(productos.data?.products.nodes)
      }      
    }

    

    useEffect(()=>{
      //Si hay searchparams => Ejecutar el handle
      if(searchParams){
        searchHandle(searchParams);        
        dispatch(closeSearchBar());        
      }

      if(collectionValue) {
          const checkCollection =async()=>{       
            setSelectedValue(collectionValue);
            const productosFiltered = await filterProducts({collection:collectionValue});  
            if(productosFiltered){
              setFilteredProducts(productosFiltered.data.collections.nodes);
            }
          }
        
          checkCollection();

      } 

      if(!collectionValue && !searchParams) {          
          feche();
      }    
     

      const fecheCollection = async () => {
          const collections =  await getCategorias()
          if(collections) {
            setCollection(collections.data.collections)
          }
        }
      fecheCollection();


    },[searchParams])



    
  return (
    <div className='flex flex-col items-center justify-center gap-3 mt-5'>

      <div className='flex flex-col items-center lg:flex-row gap-10'>

        <div className='flex gap-6'>
          <label for="pet-select">Choose a filter:</label>
          <select value={selectedValue} name="filter" onChange={handleChange}>
            {collection ? collection.nodes.map(item => <option value={item.title}>{item.title}</option>) : <p>cargando</p>}
          </select>
          {selectedValue ? <button onClick={()=>clearSelectedValue()}>Clear Filter</button> : null }
          
        </div>
        
        <div className='flex gap-4'>
          { searchParams  ? <p>Busqueda: "{searchParams}"</p>: null }
          { searchParams  ? <button onClick={()=>clearSelectedValue()}>Clear Filter</button> : null }

        </div>
          
      </div>


    


    {/* TODOS LOS PRODUCTOS------------- */}
      <div className='grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-3 lg:grid-cols-3 lg:gap-10'>
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
