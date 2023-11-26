import { getDictionary } from "@/lib/dictionary"
import FooterMenu from "./FooterMenu"

const FooterComponent = async ({ lang }) => {
  const { footer } = await getDictionary(lang)
  return (
    <FooterMenu footer={footer} lang={lang}/>
  )
}

export default FooterComponent