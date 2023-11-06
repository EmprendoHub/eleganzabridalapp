import AboutUsComponent from "@/components/about/AboutUsComponent"
import { getDictionary } from "@/lib/dictionary"

const AboutPage = async ({ params: {lang}} ) => {
  const { aboutus, quiz } = await getDictionary(lang)
  return (
   <AboutUsComponent about={aboutus} quiz={quiz} lang={lang}/>
  )
}

export default AboutPage