import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import Image from "next/image";

const ArrData = [
  {
    title: "Diamonds & Gems",
    desc: "Limited editions, mainly for collecting purposes, not for circulation",
    img: "/images/explore/gems.png",
  },
  {
    title: "Investment Coins",
    desc: "Limited editions, mainly for collecting purposes, not for circulation",
    img: "/images/explore/coin.webp",
  },
  {
    title: "Bullion Marketplace",
    desc: "Limited editions, mainly for collecting purposes, not for circulation",
    img: "/images/explore/bullion.png",
  },
];

const ArrDataOther = [
  {
    title: "Quick Checkout",
    desc: "Experience hassel-free shopping online or in-store for a fast and seamless experience",
    img: "/images/explore/1.png",
  },
  {
    title: "Online Shopping",
    desc: "Discover the ease of shopping at Bakone browse, compare and shop your favourite pieces.",
    img: "/images/explore/2.png",
  },
  {
    title: "Easy Exchange",
    desc: "Upgrade your gold to stunning new Bakone jewellery with 100% excange value",
    img: "/images/explore/3.png",
  },
  {
    title: "Trust of Bakone",
    desc: "With Bakone, you're choosing exquisite jewellery backed by the trust of the Bakone.",
    img: "/images/explore/4.png",
  },
];

export default function ExploreBakone() {
  return (
    <div className="container mx-auto pb-20 flex flex-col gap-10">
      <Heading
        title={"Explore"}
        sub="Bakone"
        desc={
          "Buy, sell, and trade high-quality precious metals and rare minerals in a secure, trusted marketplace metals and rare minerals in a secure, trusted marketplace."
        }
      />

      <div className="grid grid-cols-3 items-end">
        {ArrData.map((item) => (
          <div
            className="bg-[#DEC19F] max-w-sm mx-auto rounded-2xl pt-2 h-full"
            key={item.title}
          >
            <div className="bg-[#F0E7D9] rounded-2xl pt-5 pl-5 flex flex-col justify-between gap-5 h-full">
              <div className="text-[#8F5F1B] font-semibold text-3xl">
                {item.title}
              </div>
              <div>{item.desc}</div>

              <Button
                variant={"outline"}
                size={"lg"}
                className="text-black border-2 rounded-lg w-fit"
              >
                View More
              </Button>

              <Image src={item.img} alt={item.title} width={478} height={384} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 mt-10">
        {ArrDataOther.map((item) => (
          <div
            key={item.title}
            className="bg-[#F4F4F4] max-w-xs border border-black/10 p-5 rounded-lg flex flex-col gap-2"
          >
            <Image src={item.img} alt={item.title} width={50} height={50} />

            <div className="text-lg">{item.title}</div>
            <div className="text-[#8E8E93]">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
