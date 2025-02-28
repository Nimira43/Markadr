import { getProductBySlug } from '@/lib/actions/product.actions'
import { notFound } from 'next/navigation'

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await props.params
  const product = await getProductBySlug(slug)
  if (!product) notFound()

  return (
    <>
      <section>
        <div className='grid grid-cols-1 md:grid-cols-5'>
          <div className='col-span-2'>
            Image
          </div>
          <div className='col-span-2 p-5'>
            <div className='flex flex-col gap-6'>
              <p>
                {product.brand} {product.category}
              </p>
              <h1 className='font-semibold'>{product.name}</h1>
              <p>{product.rating} of {product.numReviews} Reviews</p>
              <div 
                className='flex flex-col sm:flex-row sm:items-center gap-3'
              > 
        
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
 
export default ProductDetailsPage