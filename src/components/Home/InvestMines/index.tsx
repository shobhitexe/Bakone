import Heading from "@/components/ui/Heading";
import Image from "next/image";

export default function InvestMines() {
  return (
    <div className="container mx-auto py-20 flex flex-col gap-10">
      <Heading
        title={"Invest in"}
        sub={"Mines"}
        desc={
          "Spin actual diamonds in 360° HD and zoom in up to 40x. One of the world's biggest collections of "
        }
      />

      <div className="grid grid-cols-3 container mx-auto justify-center gap-10">
        {Array.from({ length: 3 }).map((_, key) => (
          <Image
            key={key}
            src={`/images/mines/${key + 1}.png`}
            alt={key.toString()}
            width={535}
            height={688}
            className="rounded-2xl mx-auto max-w-[375px]"
          />
        ))}
      </div>
    </div>
  );
}
