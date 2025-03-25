import Image from "next/image";
import Link from "next/link";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

export default async function GemstoneDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const gemstone = {
    id: id,
    name: "Unique Green Sapphire",
    carats: "2.69 Carats",
    price: "$17,500",
    originalPrice: "$23,800",
    discount: "26.5%",
    description:
      "This is one of the most beautiful sapphires of this huge green color. It's a cushion square cushion. The stone has good clarity and luster. Weight is 2.69 carats.",
    additionalInfo:
      "The price of green sapphire depends on many factors, including the intensity of the color, clarity, and size. Green sapphires are rarer than blue or yellow. Because of green sapphire's incredible rarity, these vivid stones are a gorgeous alternative to emeralds.",
    images: [
      "/images/product.png",
      "/images/product.png",
      "/images/product.png",
    ],
    relatedProducts: [
      {
        id: 1,
        name: "Blue Sapphire Cushion",
        price: "$17,500",
        image: "/images/marketplace/1.png",
        discount: "20%",
      },
      {
        id: 2,
        name: "Ruby Red Cushion",
        price: "$17,500",
        image: "/images/1.png",
        discount: "15%",
      },
      {
        id: 3,
        name: "Pink Sapphire",
        price: "$17,500",
        image: "/images/2.png",
        discount: "10%",
      },
      {
        id: 4,
        name: "Cambodian Blue Zircon",
        price: "$17,500",
        image: "/images/3.png",
        discount: "25%",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm">
        <div className="flex items-center gap-2">
          <Link
            href="/marketplace"
            className="text-gray-600 hover:text-amber-800"
          >
            Marketplace
          </Link>
          <span className="text-gray-400">›</span>
          <Link
            href="/marketplace/gemstones"
            className="text-gray-600 hover:text-amber-800"
          >
            Gemstones
          </Link>
          <span className="text-gray-400">›</span>
          <Link
            href="/marketplace/gemstones/sapphire"
            className="text-gray-600 hover:text-amber-800"
          >
            Sapphire
          </Link>
          <span className="text-gray-400">›</span>
          <span className="text-amber-800">
            Unique Green Sapphire 2.69 Carats
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div>
          <div className="relative mb-4 h-[400px] w-full overflow-hidden rounded-md bg-gray-100">
            <Image
              src={gemstone.images[0] || "/placeholder.svg"}
              alt={gemstone.name}
              fill
              className="object-contain"
            />
            <button className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md">
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md">
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          <div className="flex gap-2">
            {gemstone.images.map((image, index) => (
              <div
                key={index}
                className={`h-20 w-20 cursor-pointer overflow-hidden rounded-md border-2 ${
                  index === 0 ? "border-amber-800" : "border-gray-200"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${gemstone.name} thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="mb-1 text-2xl font-light">{gemstone.name}</h1>
          <h2 className="mb-4 text-xl font-light">{gemstone.carats}</h2>

          <div className="mb-6 flex items-center gap-3">
            <span className="text-gray-500 line-through">
              {gemstone.originalPrice}
            </span>
            <span className="text-2xl font-medium text-amber-800">
              {gemstone.price}
            </span>
            <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-500">
              {gemstone.discount}
            </span>
          </div>

          <p className="mb-4 text-sm text-gray-700">{gemstone.description}</p>

          <p className="mb-6 text-sm text-gray-700">
            {gemstone.additionalInfo}
          </p>

          <div className="mb-4 space-y-3">
            <button className="w-full rounded bg-amber-700 py-3 text-center font-medium text-white transition-colors hover:bg-amber-800">
              Buy Now
            </button>

            <div className="flex gap-2">
              <button className="flex-1 rounded border border-gray-300 py-3 text-center text-sm text-gray-700 transition-colors hover:bg-gray-50">
                Add to Favourites
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded border border-gray-300 transition-colors hover:bg-gray-50">
                <Heart className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-12">
        <div className="mb-6 flex border-b">
          <button className="border-b-2 border-amber-800 px-4 py-2 text-sm font-medium text-amber-800">
            Description
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-amber-800">
            Documents & Packing
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-amber-800">
            Consultation
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-amber-800">
            How to Buy?
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm text-gray-700">
              Bakone provides all necessary documents. The jewelry is
              accompanied by gift packaging: a box, a tag and an envelope for
              storing documents and receipts.
            </p>

            <ul className="ml-5 list-disc space-y-2 text-sm text-gray-700">
              <li>
                Sales receipt and cash register receipt (warranty for jewelry)
              </li>
              <li>Jewelry quality certification/product passport</li>
              <li>GIA or MSU certificate</li>
              <li>Gift wrapping: box, package, envelope for documents</li>
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-center">
              <Image
                src="/images/certi.png"
                alt="Consultation"
                width={500}
                height={500}
                className="mx-auto mb-4"
              />
              <p className="text-sm text-gray-600">Click to view</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h3 className="mb-6 text-center text-xl font-light">
          You may also be interested in
        </h3>

        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {gemstone.relatedProducts.map((product) => (
              <Link
                key={product.id}
                href={`/gemstone/${product.id}`}
                className="min-w-[200px] overflow-hidden rounded-md border border-gray-200 bg-white transition-shadow hover:shadow-md"
              >
                <div className="relative h-48 w-full bg-gray-100">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-3">
                  <h4 className="mb-2 text-sm">{product.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-amber-800">
                      {product.price}
                    </span>
                    <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-500">
                      {product.discount}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <button className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md">
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md">
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
