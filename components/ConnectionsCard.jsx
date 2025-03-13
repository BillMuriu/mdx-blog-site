import Image from "next/image";
import InfiniteCarousel from "./InfiniteCarousel";
const logos = [
  { src: "logos/airtable.svg" },
  { src: "logos/hubspot.svg" },
  { src: "logos/airtable.svg" },
  { src: "logos/hubspot.svg" },
  { src: "logos/airtable.svg" },
  { src: "logos/hubspot.svg" },
  { src: "logos/airtable.svg" },
  { src: "logos/hubspot.svg" },
  { src: "logos/airtable.svg" },
  { src: "logos/hubspot.svg" },
  { src: "logos/airtable.svg" },
  { src: "logos/hubspot.svg" },
];

export default function ConnectionsCard() {
  return (
    <main className="w-full flex items-center justify-center">
      <InfiniteCarousel logos={logos} />
    </main>
  );
}
