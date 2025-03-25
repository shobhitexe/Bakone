import {
  Bullions,
  Diamond,
  ExploreBakone,
  GoldMintedCoins,
  Hero,
  InvestMentCoins,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <InvestMentCoins />
      <ExploreBakone />
      <Bullions />
      <Diamond />
      <GoldMintedCoins />
    </main>
  );
}
