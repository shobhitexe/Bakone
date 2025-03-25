import Link from "next/link";

import { GemstoneGrid, FilterSidebar } from "@/components";

export default function MarketplacePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-3 text-sm">
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
          <span className="text-amber-800">Diamonds</span>
        </div>
      </div>

      {/* Main content */}
      <main className="container mx-auto px-4 pb-6 pt-4">
        <h1 className="mb-2 text-center text-4xl font-light font-tenor">
          Explore the{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D78C4B] to-[#866838]">
            Marketplace
          </span>
        </h1>
        <p className="mb-8 text-center text-sm">
          Buy, sell, and trade high-quality precious metals and rare minerals in
          a secure, trusted marketplace metals
          <br />
          and rare minerals in a secure, trusted marketplace.
        </p>

        <div className="flex flex-col gap-6 lg:flex-row">
          <FilterSidebar />
          <GemstoneGrid />
        </div>
      </main>
    </div>
  );
}
