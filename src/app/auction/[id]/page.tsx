import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  Eye,
  Shield,
  Check,
  PlayCircle,
} from "lucide-react";

export default async function GemstoneAuctionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const auction = {
    id: id,
    name: "Unique Green Sapphire 2.69 Carats",
    currentBid: "$17,500",
    nextBid: "$1,100",
    bids: 83,
    timeLeft: "13h 42m 32s",
    images: ["/images/product.png", "/images/product.png"],
    video: "/images/product.png",
    shipping: [
      { country: "United States", flag: "🇺🇸", time: "3-5 days", cost: "$9.99" },
      {
        country: "United Kingdom",
        flag: "🇬🇧",
        time: "7-10 days",
        cost: "$14.99",
      },
      { country: "France", flag: "🇫🇷", time: "7-10 days", cost: "$14.99" },
    ],
    relatedAuctions: [
      {
        id: 1,
        name: "Natural Sapphire 1.75ct",
        price: "$1,200",
        image: "/images/1.png",
      },
      {
        id: 2,
        name: "Natural Spinel 1.55ct",
        price: "$1,800",
        image: "/images/2.png",
      },
      {
        id: 3,
        name: "Natural Zircon 2.1ct",
        price: "$1,350",
        image: "/images/3.png",
      },
      {
        id: 4,
        name: "Natural Topaz 2.5ct",
        price: "$950",
        image: "/images/product.png",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Auction Status Bar */}
      <div className="mb-6 rounded-md bg-amber-50 p-4">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <div className="text-xs text-gray-500">Current Bid</div>
            <div className="font-medium">{auction.currentBid}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Bids</div>
            <div className="font-medium">{auction.bids}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Time Left</div>
            <div className="flex items-center font-medium">
              <Clock className="mr-1 h-3 w-3 text-amber-800" />
              {auction.timeLeft}
            </div>
          </div>
          <div className="flex items-center justify-end gap-2">
            <button className="flex items-center gap-1 rounded-md border border-gray-300 px-3 py-1 text-xs hover:bg-gray-50">
              <Eye className="h-3 w-3" />
              <span>Add item to watch</span>
            </button>
            <button className="flex items-center gap-1 rounded-md bg-amber-700 px-3 py-1 text-xs text-white hover:bg-amber-800">
              <span>Place Bid</span>
            </button>
          </div>
        </div>
      </div>

      <h1 className="mb-6 text-xl font-medium">{auction.name}</h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div>
          <div className="relative mb-4 h-[300px] w-full overflow-hidden rounded-md bg-gray-100">
            <Image
              src={auction.images[0] || "/placeholder.svg"}
              alt={auction.name}
              fill
              className="object-contain"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md">
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          <div className="relative h-[150px] w-full overflow-hidden rounded-md bg-gray-100">
            <Image
              src={auction.video || "/placeholder.svg"}
              alt={`${auction.name} video`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="h-12 w-12 text-white opacity-80" />
            </div>
          </div>
        </div>

        {/* Bidding Section */}
        <div>
          <div className="mb-6 rounded-md border border-gray-200 p-4">
            <h2 className="mb-3 text-lg font-medium">Current Bid</h2>
            <div className="mb-4 text-2xl font-bold text-amber-800">
              {auction.nextBid}
            </div>

            <div className="mb-4 grid grid-cols-3 gap-2">
              <button className="rounded-md border border-gray-300 px-3 py-2 text-center text-sm hover:bg-gray-50">
                $
                {Number.parseInt(
                  auction.nextBid.replace("$", "").replace(",", "")
                ) - 100}
              </button>
              <button className="rounded-md border border-gray-300 px-3 py-2 text-center text-sm hover:bg-gray-50">
                ${auction.nextBid.replace("$", "")}
              </button>
              <button className="rounded-md border border-gray-300 px-3 py-2 text-center text-sm hover:bg-gray-50">
                $
                {Number.parseInt(
                  auction.nextBid.replace("$", "").replace(",", "")
                ) + 100}
              </button>
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter your bid"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                defaultValue={auction.nextBid}
              />
            </div>

            <button className="mb-4 w-full rounded-md bg-amber-700 py-2 text-center font-medium text-white transition-colors hover:bg-amber-800">
              Place Bid
            </button>

            <button className="w-full rounded-md border border-gray-300 py-2 text-center text-sm text-gray-700 transition-colors hover:bg-gray-50">
              Make Offer
            </button>
          </div>

          <div className="mb-6">
            <div className="mb-2 flex items-center gap-2">
              <Clock className="h-4 w-4 text-green-600" />
              <span className="text-sm text-green-600">
                Free Delivery by Oct. 14
              </span>
            </div>
            <div className="mb-2 flex items-center gap-2">
              <Check className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-600">30-day returns</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-sm font-medium">Payment options</h3>
            <div className="flex gap-2">
              <div className="flex h-8 w-12 items-center justify-center rounded-md border border-gray-300 bg-white">
                <div className="h-4 w-6 rounded bg-blue-600"></div>
              </div>
              <div className="flex h-8 w-12 items-center justify-center rounded-md border border-gray-300 bg-white">
                <div className="h-4 w-6 rounded bg-red-500"></div>
              </div>
              <div className="flex h-8 w-12 items-center justify-center rounded-md border border-gray-300 bg-white">
                <div className="h-4 w-6 rounded bg-blue-800"></div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-sm font-medium">
              Shipping costs - Today (1/1)
            </h3>
            <div className="space-y-2">
              {auction.shipping.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center gap-2">
                    <span>{option.flag}</span>
                    <span>{option.country}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-500">{option.time}</span>
                    <span className="w-12 text-right">{option.cost}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-green-100 bg-green-50 p-4">
            <div className="mb-2 flex items-center gap-2 text-green-700">
              <Shield className="h-5 w-5" />
              <h3 className="font-medium">Bakone Buyer Protection</h3>
              <div className="ml-auto">
                <svg
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 8v4M12 16h.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-700">
                  Your payment is safe
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-700">
                  All objects are quality checked
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-700">
                  All sellers are certified
                </span>
              </div>
              <Link
                href="#"
                className="block text-center text-xs text-green-700 underline"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8">
        <h2 className="mb-4 text-lg font-medium">Description</h2>
        <p className="mb-4 text-sm text-gray-700">
          Bakone provides all necessary documents. The jewelry is accompanied by
          gift packaging: a box, a tag and an envelope for storing documents and
          receipts.
        </p>

        <ul className="ml-5 mb-6 list-disc space-y-2 text-sm text-gray-700">
          <li>
            Sales receipt and cash register receipt (warranty for jewelry)
          </li>
          <li>Jewelry quality certification/product passport</li>
          <li>GIA or MSU certificate</li>
          <li>Gift wrapping: box, package, envelope for documents</li>
        </ul>

        <div className="mb-6 flex justify-center">
          <Image
            src="/images/certi.png"
            alt="Certificate"
            width={500}
            height={500}
            className="rounded-md border border-gray-200 p-2"
          />
        </div>
      </div>

      {/* Other Auctions */}
      <div className="mt-8">
        <h2 className="mb-6 text-lg font-medium">Other Auctions</h2>

        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {auction.relatedAuctions.map((item) => (
              <Link
                key={item.id}
                href={`/auction/${item.id}`}
                className="min-w-[150px] overflow-hidden rounded-md border border-gray-200 bg-white transition-shadow hover:shadow-md"
              >
                <div className="relative h-32 w-full bg-gray-100">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-2">
                  <h4 className="mb-1 text-xs">{item.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-amber-800">
                      {item.price}
                    </span>
                    <span className="rounded bg-gray-100 px-1.5 py-0.5 text-xs text-gray-500">
                      New
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
