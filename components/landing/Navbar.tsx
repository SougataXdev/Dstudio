"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

type Props = {};

const Navbar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="text-black fixed z-999 w-full p-4 px-4 md:px-10 lg:px-20 xl:px-40 flex justify-between items-center bg-white/90 backdrop-blur-md">
      <Image
        width={120}
        height={100}
        alt="logo"
        src="/logo-black.svg"
        className="w-24 md:w-[120px]"
      />

      {/* Desktop Navigation */}
      <div className="hidden lg:flex text-base font-sans gap-7 tracking-tighter">
        <Link href="#">About</Link>
        <Link href="#">Our Process</Link>
        <Link href="#">Case Study</Link>
        <Link href="#">Contact</Link>
      </div>

      <div className="hidden lg:flex gap-6 items-center">
        <Link className="text-base font-sans tracking-tighter" href="#">
          Retainer Plan
        </Link>
        <button className="text-white bg-black py-3 px-6 rounded-full font-sans font-medium tracking-tighter">
          Get Quote
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md lg:hidden flex flex-col p-6 gap-4 shadow-lg">
          <Link
            href="#"
            className="text-base font-sans tracking-tighter py-2 border-b border-gray-100"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-base font-sans tracking-tighter py-2 border-b border-gray-100"
          >
            Our Process
          </Link>
          <Link
            href="#"
            className="text-base font-sans tracking-tighter py-2 border-b border-gray-100"
          >
            Case Study
          </Link>
          <Link
            href="#"
            className="text-base font-sans tracking-tighter py-2 border-b border-gray-100"
          >
            Contact
          </Link>
          <Link
            href="#"
            className="text-base font-sans tracking-tighter py-2 border-b border-gray-100"
          >
            Retainer Plan
          </Link>
          <button className="text-white bg-black py-3 px-6 rounded-full font-sans font-medium tracking-tighter mt-2">
            Get Quote
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
