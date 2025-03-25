import Heading from "@/components/ui/Heading";
import Image from "next/image";

export default function Diamond() {
  return (
    <div className="container mx-auto py-20">
      <Heading
        title={"Explore the range of"}
        sub={"Diamonds"}
        desc={
          "Spin actual diamonds in 360° HD and zoom in up to 40x. One of the world's biggest collections of loose diamonds, at your fingertips."
        }
      />

      <div className="flex items-center justify-center gap-20 mt-10">
        {Array.from({ length: 5 }).map((_, key) => (
          <Image
            key={key}
            src={`/images/diamonds/${key + 1}.png`}
            alt={key.toString()}
            height={154}
            width={200}
          />
        ))}
      </div>
    </div>
  );
}
