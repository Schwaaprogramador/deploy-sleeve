export const searchProduct = `
query Busqueda($vari: String!) {
    search(query: $vari, first: 250) {
      nodes {
        ... on Product {
          id
          title
          images(first: 10) {
            nodes {
              url
            }
          }
          variants(first: 10) {
            nodes {
              price {
                amount
              }
            }
          }
        }
      }
    }
  }
`