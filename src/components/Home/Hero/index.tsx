import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/bakone1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 container mx-auto py-32 flex flex-col px-2 gap-5">
        <Image
          src={"/images/logo.svg"}
          alt={"logo"}
          width={190}
          height={50}
          className="sm:w-[190px] ss:w-[150px] w-[130px]"
        />

        <h1 className="text-white md:text-6xl sm:text-5xl ss:text-4xl text-3xl font-tenor">
          Time Crafted Golds, Diamonds
          <br />& Bullions by BAKONE.
        </h1>

        <p className="text-[#D9D9D9] max-w-3xl sm:text-base text-sm">
          Buy, sell, and trade high-quality precious metals and rare minerals in
          a secure, trusted marketplace metals and rare minerals in a secure,
          trusted marketplace.
        </p>

        <div className="flex items-center gap-4">
          <Button variant={"gold"} size={"xl"} className="text-white">
            Shop Gold Coins
          </Button>
          <Button variant={"outline"} size={"xl"} className="text-white">
            Shop Diamonds
          </Button>
        </div>
      </div>

      <div className="bg-[#F4E0CF] container rounded-lg p-5 flex items-center -bottom-20 justify-between absolute w-full mx-auto left-1/2 -translate-x-1/2">
        <div className="flex flex-col gap-2">
          <div className="text-[#995F00] font-bold text-3xl">GOLD</div>
          <div className="flex flex-col font-semibold">
            <div className="flex gap-5">
              <div>
                USD <span className="text-[#9F7550]">/OZ</span>
              </div>
              <div>
                3.025,66
                <span className="text-[#007E2A] text-sm pl-1">+0,07%</span>
              </div>
            </div>

            <div className="flex gap-5">
              <div>
                EUR<span className="text-[#9F7550]">/GR</span>
              </div>
              <div>
                89,77<span className="text-[#007E2A] text-sm pl-1">+0.19%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 ">
          <div className="text-[#995F00] font-bold text-3xl">SILVER</div>
          <div className="flex flex-col font-semibold">
            <div className="flex gap-5">
              <div>
                USD <span className="text-[#9F7550]">/OZ</span>
              </div>
              <div>
                33.31
                <span className="text-[#007E2A] text-sm pl-1">+0.07%</span>
              </div>
            </div>

            <div className="flex gap-5">
              <div>
                EUR<span className="text-[#9F7550]">/GR</span>
              </div>
              <div>
                0.9898
                <span className="text-[#B72A2C] text-sm pl-1">+0.19%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-[#995F00] font-bold text-3xl">FIXING</div>

          <div className="flex items-center gap-5">
            <div className="flex flex-col font-semibold">
              <div className="flex gap-5">
                <div>
                  GOLD <span className="text-[#9F7550]">/USD</span>
                </div>
                <div className="flex items-center gap-4">
                  <div>3.031,300 AM</div>
                  <div>3.031,700 PM</div>
                </div>
              </div>

              <div className="flex gap-5">
                <div>
                  GOLD<span className="text-[#9F7550]">/EUR</span>
                </div>
                <div className="flex items-center gap-4">
                  <div>3.031,300 AM</div>
                  <div>3.031,700 PM</div>
                </div>
              </div>
            </div>

            <div className="h-full w-1 bg-[#CBA583]" />

            <div className="flex flex-col font-semibold">
              <div className="flex gap-5">
                <div>
                  GOLD <span className="text-[#9F7550]">/USD</span>
                </div>
                <div className="flex items-center gap-4">
                  <div>3.031,300 AM</div>
                  <div>3.031,700 PM</div>
                </div>
              </div>

              <div className="flex gap-5">
                <div>
                  GOLD<span className="text-[#9F7550]">/EUR</span>
                </div>
                <div className="flex items-center gap-4">
                  <div>3.031,300 AM</div>
                  <div>3.031,700 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
