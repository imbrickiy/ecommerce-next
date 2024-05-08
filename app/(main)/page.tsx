import ActionSection from '@/components/ActionSection'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Newsletter from '@/components/Newsletter'
import Price from '@/components/Price'
import ProductList from '@/components/ProductList'

export default function Page() {
  return (
    <div className='flex flex-col gap-4'>
      <Hero />
      <Price />
      <ProductList />
      <ActionSection />
      <ProductList />
      <Newsletter />
    </div>
  )
}
