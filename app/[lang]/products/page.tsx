import { getDictionary } from "@/lib/dictionary"
import Link from "next/link"
import Image from "next/image"
import type { Locale } from "@/lib/i18n-config"

// Define types for product
interface ProductFeature {
  title: string;
  specs: string[];
}

interface Product {
  id: string;
  model: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  image: string;
  applications: string[];
  features: {
    wifi: ProductFeature;
    bluetooth: ProductFeature;
    cpu: ProductFeature;
    peripherals: ProductFeature;
  };
}

export default async function ProductsPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const { lang } = params
  const dictionary = await getDictionary(lang)
  const { productsPage, productsList } = dictionary

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-takwin-dark to-[#0a3144] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{productsPage.title}</h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">{productsPage.subtitle}</p>
            <div className="h-1 w-24 bg-takwin-green mx-auto mt-6"></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Filter Categories */}
            <div className="flex flex-wrap justify-center mb-12 space-x-2">
              <button className="px-6 py-2 rounded-full bg-takwin-green text-white mb-2">
                {productsPage.categories.all}
              </button>
              <button className="px-6 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 mb-2">
                {productsPage.categories.iot}
              </button>
              <button className="px-6 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 mb-2">
                {productsPage.categories.pcb}
              </button>
              <button className="px-6 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 mb-2">
                {productsPage.categories.robotics}
              </button>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(productsList as Product[]).map((product: Product, index: number) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-64">
                    <Image 
                      src={product.image} 
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-takwin-dark mb-1">{product.model}</h3>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">{product.title}</h4>
                    <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                    <Link 
                      href={`/${lang}/products/${product.id}`} 
                      className="inline-block bg-takwin-green hover:bg-opacity-90 text-white font-medium py-2 px-6 rounded transition-colors"
                    >
                      {productsPage.productDetails.viewDetails}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 