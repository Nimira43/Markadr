import ProductList from '@/components/shared/product/product-list'
import sampleData from '@/sample-data'

const Homepage = () => {
  
  return ( 
    <>
      <ProductList data={sampleData} title='Latest Items' />
    </>
   )
}
 
export default Homepage