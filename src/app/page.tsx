// import {
//   Bullions,
//   Diamond,
//   ExploreBAKONE,
//   GoldMintedCoins,
//   Hero,
//   InvestMentCoins,
//   InvestMines,
//   LatestNews,
//   Shops,
// } from "@/components";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <Image
        src={"/images/logo.svg"}
        alt={"logo"}
        width={190}
        height={50}
        className="sm:w-[190px] ss:w-[150px] w-[130px]"
      />
      <span className="text-2xl">Under Construction</span>

      {/* <Hero />
      <Shops />
      <InvestMentCoins />
      <ExploreBAKONE />
      <Bullions />
      <Diamond />
      <GoldMintedCoins />
      <InvestMines />
      <LatestNews /> */}
    </main>
  );
}
