import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const techLogos = {
  noCode: [
    { src: "logos/hubspot.svg", alt: "HubSpot" },
    { src: "logos/airtable.svg", alt: "Airtable" },
  ],
  code: [
    { src: "logos/hubspot.svg", alt: "HubSpot" },
    { src: "logos/airtable.svg", alt: "Airtable" },
  ],
  deployment: [
    { src: "logos/hubspot.svg", alt: "HubSpot" },
    { src: "logos/airtable.svg", alt: "Airtable" },
  ],
  database: [
    { src: "logos/hubspot.svg", alt: "HubSpot" },
    { src: "logos/airtable.svg", alt: "Airtable" },
  ],
};

const TechStackCard = () => {
  return (
    <Card className="w-full p-4 border-none">
      <CardHeader>
        <CardTitle>Tech Stack</CardTitle>
        <CardDescription>
          A breakdown of technologies used for development, storage, and
          deployment.
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col md:flex-row justify-between items-start text-left gap-12">
        {/* Development Section */}
        <div className="flex flex-col w-full md:w-1/3 space-y-4">
          <Badge className="w-fit text-sm px-3 py-1">Development</Badge>
          <div className="space-y-4">
            <div>
              <h4 className="text-md font-medium mb-2">No-Code</h4>
              <div className="flex gap-2">
                {techLogos.noCode.map((logo, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="p-2 bg-card flex items-center justify-center rounded-sm shadow-lg"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={50}
                      height={50}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-md font-medium mb-2">Code</h4>
              <div className="flex gap-2">
                {techLogos.code.map((logo, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="p-2 bg-card flex items-center justify-center rounded-sm shadow-lg"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={50}
                      height={50}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Separator (Hidden on Mobile) */}
        <Separator
          orientation="vertical"
          className="hidden md:block h-40 w-px bg-gray-300"
        />

        {/* Storage Section */}
        <div className="flex flex-col w-full md:w-1/3 space-y-4">
          <Badge className="w-fit text-sm px-3 py-1">Storage</Badge>
          <div className="flex gap-2">
            {techLogos.database.map((logo, index) => (
              <Link
                key={index}
                href="#"
                className="p-2 bg-card flex items-center justify-center rounded-sm shadow-lg"
              >
                <Image src={logo.src} alt={logo.alt} width={50} height={50} />
              </Link>
            ))}
          </div>
        </div>

        {/* Vertical Separator (Hidden on Mobile) */}
        <Separator
          orientation="vertical"
          className="hidden md:block h-40 w-px bg-gray-300"
        />

        {/* Deployment Section */}
        <div className="flex flex-col w-full md:w-1/3 space-y-4">
          <Badge className="w-fit text-sm px-3 py-1">Deployment</Badge>
          <div className="flex gap-2">
            {techLogos.deployment.map((logo, index) => (
              <Link
                key={index}
                href="#"
                className="p-2 bg-card flex items-center justify-center rounded-sm shadow-lg"
              >
                <Image src={logo.src} alt={logo.alt} width={50} height={50} />
              </Link>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TechStackCard;
