"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Input } from "./ui/input";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap items-center gap-10 p-5 md:flex-row">
        {/* Logo */}
        <Link
          href="/"
          className="title-font flex items-center  font-medium md:mb-0"
        >
          <div className="hidden rounded-full bg-black p-2 md:flex">
            <Image
              src="/assets/logo.svg"
              alt="logo"
              width={0}
              height={0}
              priority
              className="h-6 w-6 invert"
            />
          </div>
          <span className="ml-3 hidden text-xl  font-extrabold lg:flex">
            Ecommerce
          </span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          <Link href="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href="/categories" className="mr-5 hover:text-gray-900">
            Categories
          </Link>
          <Link href="#" className="mr-5 hover:text-gray-900">
            About
          </Link>
          <Link href="#" className="mr-5 hover:text-gray-900">
            Contact
          </Link>
        </nav>

        {/* Search */}
        <div className="relative hidden lg:flex">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <svg
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <Input
            type="search"
            id="default-search"
            className="block w-full rounded-lg bg-gray-50 p-4 ps-10 text-base text-gray-900"
            placeholder="Search products"
            required
          />
        </div>

        {/* Cart */}
        <div className="flex gap-4">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border-0 p-3 text-base hover:bg-gray-100 focus:outline-none "
          >
            <Image
              src="/assets/cart-line.svg"
              alt="user"
              width={24}
              height={24}
              className="h-6 w-6 flex-shrink-0 "
            />
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="inline-flex items-center rounded-full border-0 p-3 text-base hover:bg-gray-100 focus:outline-none ">
                <Image
                  src="/assets/user-circle.svg"
                  alt="user"
                  width={24}
                  height={24}
                  className="h-6 w-6 flex-shrink-0"
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/login">Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/signup">Signup</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
