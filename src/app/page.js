import ContactUsComponent from '@/components/ctas/ContactUsComponent'
import FabulousComponent from '@/components/ctas/FabulousComponent'
import QuizComponent from '@/components/ctas/QuizComponent'
import TestimonialComponent from '@/components/ctas/TestimonialComponent'
import HeroComponent from '@/components/hero/HeroComponent'
import TrendingNewProducts from '@/components/productComponents/productCatalog/TrendingNewProducts'

export default function Home() {
  return (
    <main className="">
        <HeroComponent />
        <QuizComponent />
        <TrendingNewProducts />
        <FabulousComponent />
        <TestimonialComponent />
        <ContactUsComponent />
    </main>
  )
}
