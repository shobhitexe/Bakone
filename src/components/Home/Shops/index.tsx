import Image from "next/image";

export default function Shops() {
  return (
    <div className="grid grid-cols-4 container mx-auto pt-40 justify-center">
      {Array.from({ length: 4 }).map((_, key) => (
        <Image
          key={key}
          src={`/images/shops/${key + 1}.svg`}
          alt={key.toString()}
          width={246}
          height={230}
          className="rounded-2xl mx-auto"
        />
      ))}
    </div>
  );
}
