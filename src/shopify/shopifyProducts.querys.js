
//El id del variante es el que se le pasa al carrito
// Traer todos los productos ♪
export const productQuery = `
query getProducts {
  products(first: 250) {
    nodes {
      title
      images(first: 10) {
        nodes {
          url
        }
      }
      id
      description
      variants(first: 250) {
        nodes {
          title
          price {
            amount
          }
          id
        }
      }
    }
  }
}
`

//PRODUCTO DETAIL ♪
export const productQueryDetail = `
query getProducto($productId: ID!){
  product(id: $productId) {
    variants(first: 10) {
      nodes {
        id
        title
        image {
          url
        }
      }
    }
    images(first: 10) {
      nodes {
        url
      }
    }
    title
    description
  }
}
`

//PRODUCTO RECOMENDACIONES ♪
export const productRecomendation = `
query getProducto($productId: ID!){
  productRecommendations(
    productId: $productId
    intent: RELATED
  ) {
    title
    images(first: 1) {
      nodes {
        url
      }
    }
    id
  }
}
`


// {
//   product(id: "gid://shopify/Product/7142962561114") {
//     id
//     description
//     title
//     variants(first: 10) {
//       nodes {
//         title
//         image {
//           url
//         }
//         price {
//           amount
//         }
//       }
//     }
//     productType
//     tags
//   }
// }
//FILTRAR LOS PRODUCTOS
//BUSCAR PRODUCTOS