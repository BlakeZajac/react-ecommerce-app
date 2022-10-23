export const PRODUCT_QUERY = `
query {
  products {
    data {
      attributes{
        slug
        title
        price
        description
        image {
          data {
            attributes {
              formats
            }
          }
        }
      }
    }
  }
}`

export const GET_PRODUCT_QUERY = `
query getProducts($slug:String!){
  products(filters: {slug :{eq: $slug}}){
    data{
      attributes{
        slug
        title
        price
        description
        image{
          data{
            attributes{
              formats
            }
          }
        }
      }
    }
  }
}`;