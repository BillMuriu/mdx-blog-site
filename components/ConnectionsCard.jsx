import InfiniteCarousel from "./InfiniteCarousel";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import InfiniteCarouselReverse from "./InfiniteCarouselReverse";
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
      <Card className="w-full border-none p-2 bg-transparent">
        <CardHeader className="text-left">
          <CardTitle className="flex items-center gap-2 text-2xl">
            API integrations
          </CardTitle>
          <CardDescription className="text-gray-600">
            Integrate with more than 40+ apps in a snap.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <InfiniteCarouselReverse logos={logos} />
          <InfiniteCarousel logos={logos} />
        </CardContent>
      </Card>
    </main>
  );
}
