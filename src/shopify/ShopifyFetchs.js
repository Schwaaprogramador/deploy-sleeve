import { addItemToCart, createCart, getCart, removeItemToCart } from "./shopifyCart.querys.js";
import { getCollectionAll, getCollectionProducts } from "./shopifyCollections.querys.js";
import { client } from "./shopifyConfig.querys.js";
import { productQuery, productQueryDetail, productRecomendation } from "./shopifyProducts.querys.js";
import { searchProduct } from "./ShopifySearch.querys.js";


//TRAER LOS PRODUCTOS ♪
export const fetchProductos = async ()=> {

   const resP = await client.fetch(productQuery).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return ('La respuesta no fue exitosa');
    }
  })
  return resP

}

//PRODUCTO DETAIL ♫
export const fetchProductoDetail = async ({id}) => {

  const resP = await client.fetch(productQueryDetail, {variables:{productId:id}}).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return ('La respuesta no fue exitosa');
      }
    })
 return resP

}


//BUSCAR PRODUCTOS
export const searchProducts = async({query}) => {
  
  const resP = await client.fetch(searchProduct,  { variables:{vari:query}}).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return ('La respuesta no fue exitosa');
    }
  })
    return resP
}


//FILTRAR PRODUCTOS
export const filterProducts = async ({collection})=>{
  const resP = await client.fetch(getCollectionProducts,  {variables:{collectionId:collection}}).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return ('La respuesta no fue exitosa');
    }
  })
    return resP 
}
//PRODUCTOS RECOMENDATIONS
export const productRecomendados = async ({productId})=>{
      const resP = await client.fetch(productRecomendation,  {variables:{productId}}).then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return ('La respuesta no fue exitosa');
        }
      })
    return resP
}





//CARRITO--------------------------------------------------------------------------------------------------------
//CREAR UN CARRITO ♪
export const createCarrito = async () => {

    const resP = await client.fetch(createCart).then(res => {
      if (res.ok) {
        return res.json()
      } else {
       return 'La respuesta no fue exitosa';
      }
    })

    return resP
  }

// GET CARRITO ACTIVO ♪
  export const getCarritoCreado = async ({id}) => {
    
    const resP = await client.fetch(getCart, { variables:{cartId:id}}).then( res => {
      if(res.ok){
        return res.json()
      } else {
        return ' No se encontro el carrito pa';
      }
    })
    return resP
  }

//AGREGAR PRODUCTOS AL CARRITO
export const addItemAlCarrito = async ({cartId ,variantId}) => {

  const resP = await client.fetch(addItemToCart, { variables:{cartId, variantId}}).then( res => {
    if(res.ok){
      return res.json()
    } else {
      return ' No se encontro el carrito pa';
    }
  })
  return resP
}

//ELIMINAR PRODUCTOS DEL CARRITO
export const removeItemAlCarrito = async ({cartId , lineIds}) => {
  const resP = await client.fetch(removeItemToCart, { variables:{cartId, lineIds}}).then( res => {
    if(res.ok){
      return res.json()
    } else {
      return ' No se encontro el carrito pa';
    }
  })
  return resP
}







//COLLECTIONS--------------------------------------------------------------------------------------------------------
//TRAER COLLECTIONS
export const getCategorias = async ()=>{

  const resp = await client.fetch(getCollectionAll).then( res => {
    if(res.ok){
      return res.json()
    } else {
      return 'No se encontraron las categorias'
    }
  })
  return resp
}
