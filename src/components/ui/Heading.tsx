export default function Heading({
  title,
  sub,
  desc,
}: {
  title: string;
  sub: string;
  desc: string;
}) {
  return (
    <div className="text-center flex flex-col gap-2 justify-center items-center">
      <div className="flex items-center text-5xl gap-2 font-tenor">
        <div>{title}</div>
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#D78C4B] to-[#866838]">
          {sub}
        </div>
      </div>

      <div className="max-w-4xl text-lg">{desc}</div>
    </div>
  );
}
