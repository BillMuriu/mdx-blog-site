import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const OfferCard = ({ title, description, offers, icon, buttonText }) => {
  return (
    <Card className="py-6 px-6 bg-[#F5F1E6] border border-black rounded-2xl shadow-lg">
      <CardHeader className="text-left">
        <CardTitle className="flex items-center gap-2 text-2xl">
          {icon || (
            <span role="img" aria-label="icon">
              🚀
            </span>
          )}{" "}
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
      <Separator className="my-4" />
      <CardContent>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-lg">
          {offers.map((offer, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle className="text-green-600" size={18} />
              {offer}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-4 text-left">
        <Button
          variant="default"
          className="bg-black text-white px-6 py-3 text-lg shadow-md hover:bg-gray-900"
        >
          {buttonText || "Book a Call"}
        </Button>
      </CardFooter>
    </Card>
  );
};
