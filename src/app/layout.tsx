import type { Metadata } from "next";
import { Manrope, Tenor_Sans } from "next/font/google";
import "./globals.css";
import { Footer, MarketplaceHeader, Navigation, TopBanner } from "@/components";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const tenor = Tenor_Sans({
  weight: ["400"],
  variable: "--font-tenor",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BAKONE",
  description: "BAKONE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${tenor.variable} antialiased`}>
        <TopBanner />
        <MarketplaceHeader />

        <Navigation />
        {children}

        <Footer />
      </body>
    </html>
  );
}
