import { Button } from "@/components/ui/button";
import Image from "next/image";

const Data = [
  {
    name: "The South African Mint",
    type: "Krugerrand",
    price: "$2,498",
    latestBid: "$2,789.00",
  },
  {
    name: "The South African Mint",
    type: "Krugerrand",
    price: "$2,498",
    latestBid: "$2,789.00",
  },
  {
    name: "The South African Mint",
    type: "Krugerrand",
    price: "$2,498",
    latestBid: "$2,789.00",
  },
  {
    name: "The South African Mint",
    type: "Krugerrand",
    price: "$2,498",
    latestBid: "$2,789.00",
  },
  {
    name: "The South African Mint",
    type: "Krugerrand",
    price: "$2,498",
    latestBid: "$2,789.00",
  },
  {
    name: "The South African Mint",
    type: "Krugerrand",
    price: "$2,498",
    latestBid: "$2,789.00",
  },
];

export default function InvestMentCoins() {
  return (
    <div className="py-40 container mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="font-tenor text-5xl">
            Investment{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D78C4B] to-[#866838]">
              Coins
            </span>
          </div>
          <div className="text-granite max-w-3xl">
            Buy, sell, and trade high-quality precious metals and rare minerals
            in a secure, trusted marketplace metals and rare minerals in a
            secure, trusted marketplace.
          </div>
        </div>

        <Button>View Investment Coins</Button>
      </div>

      <div className="grid grid-cols-3 justify-center mt-10">
        {Data.map((item, idx) => (
          <div key={idx} className="flex justify-center gap-4 items-center">
            <div className="flex items-center gap-4">
              <div className="text-[#D3D3D3] font-tenor text-8xl">
                {idx + 1}
              </div>

              <div className="flex flex-col gap-2">
                <div>
                  <div>{item.name}</div>
                  <div className="font-semibold">{item.type}</div>
                </div>

                <div>
                  <div>{item.price}</div>
                  <div>{item.latestBid}</div>
                </div>
              </div>
            </div>

            <Image
              src={`/images/investment-coins/${idx + 1}.png`}
              alt={item.name}
              width={170}
              height={170}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
