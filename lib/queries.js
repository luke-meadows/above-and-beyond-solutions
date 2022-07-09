export const IMAGE_QUERY = `query IMAGE_QUERY($pagination: Int! $activeOption: String){
    images(pagination:{limit:$pagination} filters: {category: {eq: $activeOption}} sort: "createdAt:desc"){
  meta{
    pagination{
      total
    }
  }    
      data{
        attributes{
          slug
          category
          createdAt
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
  }
`;
