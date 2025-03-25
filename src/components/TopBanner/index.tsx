import Link from "next/link";

export default function TopBanner() {
  return (
    <div className="bg-crayola py-1 text-center sm:text-sm text-xs">
      <span>Cherish the Moment | </span>
      <Link href="#">Upto 10% OFF</Link>
      <span> | </span>
      <Link href="#">More Details</Link>
    </div>
  );
}
