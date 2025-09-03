"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            {isMenuOpen ? (
              <X className="h-6 w-6 transition-transform duration-300" />
            ) : (
              <Menu className="h-6 w-6 transition-transform duration-300" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-screen h-screen fixed top-0 left-0 flex flex-col items-center justify-center p-8 bg-background/95 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 transition-opacity duration-300">
          <DropdownMenuLabel className="text-2xl font-bold mb-8">
            Navigation
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem asChild className="p-0 mb-4 focus:bg-transparent">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-bold py-4 transition-all duration-300 hover:text-primary hover:bg-gray-900/10 hover:scale-110"
            >
              Home
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild className="p-0 mb-4 focus:bg-transparent">
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-bold py-4 transition-all duration-300 hover:text-primary hover:bg-gray-900/10 hover:scale-110"
            >
              About
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild className="p-0 focus:bg-transparent">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-bold py-4 transition-all duration-300 hover:text-primary hover:bg-gray-900/10 hover:scale-110"
            >
              Contact
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
