import ProductPrice from '@/components/shared/product/product-price'
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
                <ProductPrice
                  value={Number(product.price)}
                  className='w-24 rounded-full bg-main-light text-main px-5 py-2'
                />
              </div>
            </div>
            <div className='mt-10'>
              <p className='font-medium'>Description</p>
              <p>{product.description}</p>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
 
export default ProductDetailsPage