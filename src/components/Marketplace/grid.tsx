import Image from "next/image";
import Link from "next/link";

const gemstones = [
  {
    id: 1,
    name: "Round Cut Tanzanite 5.27ct",
    price: "$17,500",
    image: "/placeholder.svg?height=200&width=200",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Buy, sell, and trade high",
    price: "$17,500",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Burmese Red Spinel 2.05ct",
    price: "$17,500",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Buy, sell, and trade high",
    price: "$17,500",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Buy, sell, and trade high",
    price: "$17,500",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "Buy, sell, and trade high",
    price: "$17,500",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 7,
    name: "Buy, sell, and trade high",
    price: "$17,500",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 8,
    name: "Green Sapphire 1.6ct",
    price: "$17,500",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 9,
    name: "Buy, sell, and trade high",
    price: "$17,500",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 10,
    name: "Buy, sell, and trade high",
    price: "$17,500",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 11,
    name: "Buy, sell, and trade high",
    price: "$17,500",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 12,
    name: "Cambodian Blue Zircon 4.6ct",
    price: "$17,500",
    image: "/placeholder.svg?height=200&width=200",
  },
];

export default function GemstoneGrid() {
  return (
    <div className="flex-1">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Gemstones</span>
          <span className="text-gray-400">|</span>
          <span className="text-sm text-gray-500">Gemstones</span>
          <span className="text-gray-400">|</span>
          <span className="text-sm text-gray-500">Gemstones</span>
          <span className="text-gray-400">|</span>
          <span className="text-sm text-gray-500">Gemstones</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Sort by:</span>
          <select className="rounded border border-gray-300 px-2 py-1 text-sm">
            <option>A-Z</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {gemstones.map((gemstone, idx) => (
          <Link
            key={gemstone.id}
            href={`/gemstone/${gemstone.id}`}
            className="group overflow-hidden rounded-md border border-gray-200 bg-white transition-all hover:shadow-md"
          >
            <div className="relative bg-[#EAEAEA]">
              <Image
                src={`/images/marketplace/${idx + 1}.png`}
                alt={gemstone.name}
                width={300}
                height={300}
                className="h-48 w-full object-contain p-4"
              />
              {gemstone.tag && (
                <div className="absolute right-2 top-2 bg-amber-800 px-2 py-1 text-xs text-white">
                  {gemstone.tag}
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-sm font-medium group-hover:text-amber-800">
                {gemstone.name}
              </h3>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-500 line-through">
                    $20,000
                  </span>
                  <p className="text-base font-medium text-amber-800">
                    {gemstone.price}
                  </p>
                </div>
                <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-500">
                  7% OFF
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="rounded-md bg-amber-700 px-6 py-2 text-white transition-colors hover:bg-amber-800">
          Load More
        </button>
      </div>
    </div>
  );
}
