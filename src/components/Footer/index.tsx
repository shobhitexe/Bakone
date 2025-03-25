import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#5F4824] text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/logo.svg"
              alt="Bakone"
              width={170}
              height={40}
              className="mb-4 h-10 brightness-0 invert"
            />
            <p className="mb-4 text-sm">
              Buy, sell, and trade high-quality precious metals and rare
              minerals in a secure, trusted marketplace.
            </p>
            <div className="flex gap-2">
              <Link href="#" className="rounded-full bg-white p-1.5">
                <Image
                  src="/placeholder.svg?height=16&width=16"
                  alt="Twitter"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
              </Link>
              <Link href="#" className="rounded-full bg-white p-1.5">
                <Image
                  src="/placeholder.svg?height=16&width=16"
                  alt="Facebook"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
              </Link>
              <Link href="#" className="rounded-full bg-white p-1.5">
                <Image
                  src="/placeholder.svg?height=16&width=16"
                  alt="Instagram"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
              </Link>
              <Link href="#" className="rounded-full bg-white p-1.5">
                <Image
                  src="/placeholder.svg?height=16&width=16"
                  alt="LinkedIn"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-medium">Bakone</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Catalog of Stones</Link>
              </li>
              <li>
                <Link href="#">Unique Stones</Link>
              </li>
              <li>
                <Link href="#">Gemstone Jewelry</Link>
              </li>
              <li>
                <Link href="#">Product Catalog</Link>
              </li>
              <li>
                <Link href="#">Metals</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Our Advantages</Link>
              </li>
              <li>
                <Link href="#">Payment, Delivery & Return</Link>
              </li>
              <li>
                <Link href="#">Our Guarantees</Link>
              </li>
              <li>
                <Link href="#">Offer for Jewelers</Link>
              </li>
              <li>
                <Link href="#">About the Company</Link>
              </li>
              <li>
                <Link href="#">Contacts</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-medium">Documents</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Site Map</Link>
              </li>
              <li>
                <Link href="#">Accessibility</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" py-4 text-center text-xs">
        <div className="container mx-auto px-4">
          <p>© 2023 Bakone. All rights reserved</p>
          <p className="mt-2">International Shipping</p>
          <p className="mt-1">email: info@bakone.com</p>
        </div>
      </div>
    </footer>
  );
}
