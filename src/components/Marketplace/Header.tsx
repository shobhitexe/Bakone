import { Heart, ShoppingBag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MarketplaceHeader() {
  return (
    <header className="border-b border-gray-200 py-4">
      <div className="container mx-auto sm:grid flex grid-cols-3 items-center justify-between max-sm:px-4">
        <div className="sm:flex hidden items-center gap-4">
          <div className="mr-4 flex">
            <select className="border-none text-sm outline-none">
              <option>Language: English</option>
            </select>
          </div>
        </div>
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/images/logo.svg"
            alt="BAKONE"
            width={166}
            height={44}
            className="sm:w-[166px] w-[100px]"
          />
        </Link>

        <div className="flex items-center gap-4 justify-end">
          <Link href="#" aria-label="User account">
            <User className="h-5 w-5 text-gray-600" />
          </Link>
          <Link href="#" aria-label="Wishlist">
            <Heart className="h-5 w-5 text-gray-600" />
          </Link>
          <Link href="#" aria-label="Shopping bag" className="relative">
            <ShoppingBag className="h-5 w-5 text-gray-600" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-amber-800 text-xs text-white">
              0
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
