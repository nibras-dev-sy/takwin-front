import { getDictionary } from "@/lib/dictionary"
import Link from "next/link"
import Image from "next/image"
import type { Locale } from "@/lib/i18n-config"
import { notFound } from "next/navigation"

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

export default async function ProductDetailPage({
  params,
}: {
  params: { lang: Locale; productId: string }
}) {
  const { lang, productId } = params
  const dictionary = await getDictionary(lang)
  const { productsPage, productsList } = dictionary
  
  // Find the product by ID
  const product = (productsList as Product[]).find(p => p.id === productId)
  
  // If product not found, show 404
  if (!product) {
    notFound()
  }

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-takwin-dark to-[#0a3144] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{product.model}</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">{product.title}</h2>
            <div className="h-1 w-24 bg-takwin-green mx-auto mt-6"></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Back button */}
            <div className="mb-10">
              <Link 
                href={`/${lang}/products`} 
                className="inline-flex items-center text-takwin-dark hover:text-takwin-green transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                {productsPage.productDetails.backToProducts}
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src={product.image} 
                  alt={`${product.model} - ${product.title}`}
                  fill
                  className="object-contain bg-white p-4"
                />
              </div>
              
              {/* Product Details */}
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-takwin-dark mb-4">{productsPage.productDetails.description}</h3>
                  <p className="text-gray-700 text-lg">{product.fullDescription}</p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-takwin-dark mb-4">{productsPage.productDetails.applications}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {product.applications.map((app, index) => (
                      <li key={index} className="text-lg">{app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Features and Specifications */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-takwin-dark mb-8 text-center">{productsPage.productDetails.features}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Wi-Fi */}
                <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                  <h4 className="text-xl font-semibold text-takwin-dark mb-4">{product.features.wifi.title}</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {product.features.wifi.specs.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Bluetooth */}
                <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                  <h4 className="text-xl font-semibold text-takwin-dark mb-4">{product.features.bluetooth.title}</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {product.features.bluetooth.specs.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </div>
                
                {/* CPU and Memory */}
                <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                  <h4 className="text-xl font-semibold text-takwin-dark mb-4">{product.features.cpu.title}</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {product.features.cpu.specs.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Peripherals */}
                <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                  <h4 className="text-xl font-semibold text-takwin-dark mb-4">{product.features.peripherals.title}</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {product.features.peripherals.specs.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 