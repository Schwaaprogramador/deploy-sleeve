export const getCollectionProducts = `
query Collections($collectionId: String){
  collections(query: $collectionId, first: 250) {
    nodes {
      title
      products(first: 250) {
        nodes {
          title
          id
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
}
`

export const getCollectionAll = `
query Collections {
    collections(query: "", first: 250) {
      nodes {
        title
      }
    }
  }
`



// "nodes": [
//   {
//     "title": "Oro"
//   },
//   {
//     "title": "Joyería"
//   },
//   {
//     "title": "Boutique"
//   },
//   {
//     "title": "Preorder"
//   },
//   {
//     "title": "Seamless"
//   },
//   {
//     "title": "Accesorios"
//   },
//   {
//     "title": "Croché"
//   },
//   {
//     "title": "Undies"
//   },
//   {
//     "title": "New in"
//   },
//   {
//     "title": "Perfume"
//   },
//   {
//     "title": "Pulsos"
//   },
//   {
//     "title": "Anillos"
//   },
//   {
//     "title": "Cadenas"
//   },
//   {
//     "title": "Topos"
//   },
//   {
//     "title": "Aretes"
//   },
//   {
//     "title": "Tobilleras"
//   },
//   {
//     "title": "Esclavas"
//   },
//   {
//     "title": "Cuidado joyas"
//   },
//   {
//     "title": "Dijes"
//   },
//   {
//     "title": "Tarjeta regalo"
//   },
//   {
//     "title": "Pendientes"
//   },
//   {
//     "title": "Candongas"
//   },
//   {
//     "title": "Relojes"
//   },
//   {
//     "title": "Alta joyería"
//   },
//   {
//     "title": "Joyería."
//   },
//   {
//     "title": "Plata"
//   },
//   {
//     "title": "Gifts"
//   }
// ]
// }