import {
  Bullions,
  Diamond,
  ExploreBAKONE,
  GoldMintedCoins,
  Hero,
  InvestMentCoins,
  InvestMines,
  LatestNews,
  Shops,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <Shops />
      <InvestMentCoins />
      <ExploreBAKONE />
      <Bullions />
      <Diamond />
      <GoldMintedCoins />
      <InvestMines />
      <LatestNews />
    </main>
  );
}
