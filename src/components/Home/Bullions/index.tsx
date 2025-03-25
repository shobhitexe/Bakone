import Heading from "@/components/ui/Heading";
import Image from "next/image";

const Data = [
  { title: "Fine Gold 999.9", weight: "Net Wt. 1.00G" },
  { title: "Fine Gold 999.8", weight: "Net Wt. 1.00G" },
  { title: "Fine Gold 999.7", weight: "Net Wt. 1.00G" },
  { title: "Fine Gold 999.6", weight: "Net Wt. 1.00G" },
];

export default function Bullions() {
  return (
    <div className="bg-[#F0E7D9] py-20">
      <div className="container mx-auto">
        <Heading
          title={"Shop Expensive"}
          sub={"Bullions"}
          desc={
            "Spin actual diamonds in 360° HD and zoom in up to 40x. One of the world's biggest collections of loose bullions, at your fingertips."
          }
        />
      </div>

      <div className="grid grid-cols-4 justify-center mt-10">
        {Data.map((item, idx) => (
          <div
            key={item.title}
            style={{
              background: "linear-gradient(180deg, #C6B397 0%, #EDD4BC 100%)",
            }}
            className="max-w-xs w-fit mx-auto rounded-2xl pt-5 px-5 flex flex-col justify-between text-center"
          >
            <div className="text-[#694526] font-semibold text-2xl">
              {item.title}
            </div>
            <div>{item.weight}</div>

            <Image
              src={`/images/bullions/${idx + 1}.png`}
              alt={item.title}
              width={224}
              height={274}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
