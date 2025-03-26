import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import Image from "next/image";

export default function LatestNews() {
  return (
    <div className="container mx-auto py-20 flex flex-col gap-10">
      <Heading
        title={"Our Latest"}
        sub={"News"}
        desc={"Some of the new blogs are live now, read it!"}
      />
      <div className="grid grid-cols-4 container mx-auto justify-center gap-10">
        {Array.from({ length: 4 }).map((_, key) => (
          <Image
            key={key}
            src={`/images/news/${key + 1}.png`}
            alt={key.toString()}
            width={393}
            height={431}
            className="rounded-2xl mx-auto"
          />
        ))}
      </div>

      <Button size={"xl"} className="w-fit mx-auto">
        See More News
      </Button>
    </div>
  );
}
