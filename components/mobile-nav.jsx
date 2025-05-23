"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="w-10 px-0 sm:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="right">
        <MobileLink
          onOpenChange={setOpen}
          href="/"
          className="flex gap-2 items-center"
        >
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={24}
            height={24}
            className="rounded"
          />
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink>

        <div className="flex flex-col gap-3 mt-3">
          <MobileLink onOpenChange={setOpen} href="/blog">
            Blog
          </MobileLink>
          {/* <MobileLink onOpenChange={setOpen} href="/about">
            About
          </MobileLink>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            GitHub
          </a> */}
          {/* <a target="_blank" rel="noreferrer" href={siteConfig.links.twitter}>
            Twitter
          </a> */}
        </div>
      </SheetContent>
    </Sheet>
  );
}

function MobileLink({ href, onOpenChange, children, className, ...props }) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
