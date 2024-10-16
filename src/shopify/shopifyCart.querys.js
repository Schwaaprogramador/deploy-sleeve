
//CREAR EL CARRITO ♪
export const createCart = `mutation MyMutation {
  cartCreate {
    cart {
      checkoutUrl
      id
    }
  }
}
`;


//BUSCAR EL CARRITO YA CREADO ♪
export const getCart = `
query getCarrito($cartId: ID!) {
  cart(id: $cartId) {
    checkoutUrl
    lines(first: 250) {
      edges {
        node {
          quantity
          merchandise {
            ... on ProductVariant {
              id
              title
              price {
                amount
              }
              image {
                url
              }
            }
          }          
        }
      }
    }
      cost {
      totalAmount {
        amount
      }
    }
  }
}
`


//AGREGAR AL CARRITO ♪
//  {
//   "cartId": "gid://shopify/C0FD?key=853dbc0dc0156825654f79a913a589c1", 
//    "variantId": "gid://shopify/ProductVariant/41081331712090"
//   }

export const addItemToCart = `
mutation AddToCart($cartId: ID!, $variantId: ID!) {
  cartLinesAdd(cartId: $cartId, lines: [{ quantity: 1, merchandiseId: $variantId}]) {
    cart {
      lines(first: 100) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                product {
                  title
                }
              }
            }
          }
        }
      }
    }
  }
}
`