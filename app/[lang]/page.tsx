import { getDictionary } from "@/lib/dictionary"
import type { Locale } from "@/lib/i18n-config"
import Image from "next/image"
import Hero from "@/components/hero"

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  stars: number;
}

export default async function Home({
  params,
}: {
  params: any
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return (
    <>
      <Hero dictionary={dictionary} lang={lang} />
    </>
  )
}
