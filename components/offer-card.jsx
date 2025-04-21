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
    <Card className="py-6 px-6 bg-card border border-border text-card-foreground rounded-2xl shadow-md">
      <CardHeader className="text-left space-y-2">
        <CardTitle className="flex items-center gap-2 text-2xl font-semibold">
          {icon || (
            <span role="img" aria-label="icon">
              🚀
            </span>
          )}
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <Separator className="my-4 bg-border" />

      <CardContent>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[1rem]">
          {offers.map((offer, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle className="text-primary" size={18} />
              {offer}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="mt-4 text-left">
        <Button
          variant="default"
          className="bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] px-6 py-3 text-lg font-semibold shadow-md hover:bg-[hsl(var(--accent)/0.9)] transition-colors"
        >
          {buttonText || "Book a Call"}
        </Button>
      </CardFooter>
    </Card>
  );
};
