import { buttonVariants } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import Image from "next/image";
import Link from "next/link";

const ArrData = [
  {
    title: "Shop Diamonds",
    desc: "Limited editions, mainly for collecting purposes, not for circulation",
    img: "/images/explore/gems.png",
    link: "/marketplace",
  },
  {
    title: "Gold Coins",
    desc: "Limited editions, mainly for collecting purposes, not for circulation",
    img: "/images/explore/coin.webp",
    link: "/marketplace",
  },
  {
    title: "Shop bullion",
    desc: "Limited editions, mainly for collecting purposes, not for circulation",
    img: "/images/explore/bullion.png",
    link: "/marketplace",
  },
  {
    title: "Invest in Mines",
    desc: "Limited editions, mainly for collecting purposes, not for circulation",
    img: "/images/explore/bullion.png",
    link: "/marketplace",
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
    desc: "Discover the ease of shopping at BAKONE browse, compare and shop your favourite pieces.",
    img: "/images/explore/2.png",
  },
  {
    title: "Easy Exchange",
    desc: "Upgrade your gold to stunning new BAKONE jewellery with 100% excange value",
    img: "/images/explore/3.png",
  },
  {
    title: "Trust of BAKONE",
    desc: "With BAKONE, you're choosing exquisite jewellery backed by the trust of the BAKONE.",
    img: "/images/explore/4.png",
  },
];

export default function ExploreBAKONE() {
  return (
    <div className="container mx-auto pb-20 flex flex-col gap-10">
      <Heading
        title={"Explore"}
        sub="BAKONE"
        desc={
          "Buy, sell, and trade high-quality precious metals and rare minerals in a secure, trusted marketplace metals and rare minerals in a secure, trusted marketplace."
        }
      />

      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-2 items-end gap-10">
          {ArrData.map((item) => (
            <div
              className="bg-[#DEC19F] w-full mx-auto rounded-2xl pt-2 h-full"
              key={item.title}
            >
              <div className="bg-[#F0E7D9] rounded-2xl pt-5 pl-5 flex flex-col justify-between gap-5 h-full">
                <div className="text-[#8F5F1B] font-semibold text-3xl">
                  {item.title}
                </div>
                <div>{item.desc}</div>

                <Link
                  href={item.link}
                  className={`${buttonVariants({
                    variant: "outline",
                    size: "lg",
                    className: "w-fit text-black",
                  })}`}
                >
                  View More
                </Link>

                <Image
                  src={item.img}
                  alt={item.title}
                  width={382}
                  height={307}
                  className="self-end"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#DEC19F] w-full mx-auto rounded-2xl pt-2 h-full">
          <div className="bg-[#F0E7D9] rounded-2xl pt-5 pl-5 flex flex-col justify-between gap-5 h-full">
            <div className="text-[#8F5F1B] font-semibold text-3xl">
              BAKONE Auction House
            </div>
            <div>
              Limited editions, mainly for collecting purposes, not for
              circulation Discover the ease of shopping at Bakone browse,
              compare and shop your favourite pieces.
            </div>

            <Link
              href={"/auction/1"}
              className={`${buttonVariants({
                variant: "outline",
                size: "lg",
                className: "w-fit text-black",
              })}`}
            >
              View More
            </Link>

            <Image
              src={"/images/auction.png"}
              alt={"auction"}
              width={382}
              height={307}
              className="self-end"
            />
          </div>
        </div>
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
