import ContactUsComponent from '@/components/ctas/ContactUsComponent'
import FabulousComponent from '@/components/ctas/FabulousComponent'
import QuizComponent from '@/components/ctas/QuizComponent'
import TestimonialComponent from '@/components/ctas/TestimonialComponent'
import HeroComponent from '@/components/hero/HeroComponent'
import TrendingNewProducts from '@/components/productComponents/productCatalog/TrendingNewProducts'
import { getDictionary } from '@/lib/dictionary'

export default async function Home({ params: {lang} }) {
  const { mainhero, quiz, contactform, fabulous, trending, testimonialst } = await getDictionary(lang)
  return (
    <main className="">
        <HeroComponent mainhero={mainhero} lang={lang} />
        <QuizComponent quiz={quiz} />
        <TrendingNewProducts trending={trending} lang={lang} />
        <FabulousComponent fabulous={fabulous} />
        <TestimonialComponent testimonialst={testimonialst} />
        <ContactUsComponent contactform={contactform} />
    </main>
  )
}
