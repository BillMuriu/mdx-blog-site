import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import React from "react";
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";
export const SolutionsCard = () => {
  const offers = [
    "Ongoing AI Implementations",
    "Minimum 3 Months",
    "Custom AI Roadmap",
    "Try Without Risk",
    "Consulting & Coaching",
    "Cancel Any Time",
  ];

  return (
    <Card className="py-6 px-6 bg-[#F5F1E6] border border-black rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <span role="img" aria-label="robot">
            🤖
          </span>{" "}
          Custom AI Solutions
        </CardTitle>
        <CardDescription className="text-gray-600">
          Get in-house AI Expertise, designed for teams who need custom agents &
          automated workflows
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
      <CardFooter className="flex justify-center">
        <Button
          variant="default"
          className="bg-black text-white px-6 py-3 text-lg shadow-md hover:bg-gray-900"
        >
          Book a Call
        </Button>
      </CardFooter>
    </Card>
  );
};
