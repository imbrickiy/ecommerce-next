import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-[#F6F6F6] px-16 py-14 font-sans tracking-wide">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-start lg:justify-center">
          <Link href="/" className="flex items-center">
            <div className=" flex h-10 w-10 items-center justify-center rounded-full">
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width={0}
                height={0}
                priority
                className="h-auto w-auto object-cover"
              />
            </div>
            <span className=" pl-3 text-xl font-extrabold">Ecommerce</span>
          </Link>
          <p className="mt-3 w-[272px] text-sm font-normal not-italic leading-[175%] text-[#5C5F6A]">
            DevCut is a YouTube channel for practical project-based learning.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-semibold text-[#5C5F6A]">
            Quick Links
          </h2>
          <ul className="space-y-4">
            <li>
              <a className="text-sm text-[#5C5F6A] transition-all hover:text-white">
                Newsroom
              </a>
            </li>
            <li>
              <a className="text-sm text-[#5C5F6A] transition-all hover:text-white">
                Tailwind CSS
              </a>
            </li>
            <li>
              <a className="text-sm text-[#5C5F6A] transition-all hover:text-white">
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-semibold text-[#5C5F6A]">
            Follow Us
          </h2>
          <ul className="space-y-4">
            <li>
              <a className="text-sm text-[#5C5F6A] transition-all hover:text-white">
                Github
              </a>
            </li>
            <li>
              <a className="text-sm text-[#5C5F6A] transition-all hover:text-white">
                linkedin
              </a>
            </li>
            <li>
              <a className="text-sm text-[#5C5F6A] transition-all hover:text-white">
                Twitter
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-semibold text-[#5C5F6A]">Company</h2>
          <ul className="space-y-4">
            <li>
              <a className="text-sm text-[#5C5F6A] transition-all hover:text-white">
                About
              </a>
            </li>
            <li>
              <a className="text-sm text-[#5C5F6A] transition-all hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="text-sm text-[#5C5F6A] transition-all hover:text-white">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-600" />

      <div className="flex flex-wrap gap-6 sm:justify-between">
        <div className="flex space-x-5">
          <a className="text-sm text-gray-300 transition-all hover:text-white">
            <svg
              className="h-5 w-5 fill-gray-400 hover:fill-white"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63
                  .772-1.63 1.558V12h2.77l-.443 2.89h-2.327V22C18.343 21.128 22 16.991 22 12"
              ></path>
            </svg>
          </a>
          <a className="text-sm text-gray-300 transition-all hover:text-white">
            <svg
              className="h-5 w-5 fill-gray-400 hover:fill-white"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12 2C6.486 2 2 6.486 2 12c0 5.513 4.486 10 10 10s10-4.487 10-10c0-5.514-4.486-10-10-10zm0 1.542c4.951 0 8.458 3.392 8.458 8.458 0 4.949-3.391 8.458-8.458 8.458-4.948 0-8.458-3.391-8.458-8.458
                      0-4.949 3.392-8.458 8.458-8.458zM9.743 16.747V7.128l6.027 4.31-6.027 4.309z"
              ></path>
            </svg>
          </a>
          <a className="text-sm text-gray-300 transition-all hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-5 w-5 fill-gray-400 hover:fill-white"
              viewBox="0 0 24 24"
            >
              <path d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"></path>
            </svg>
          </a>
        </div>

        <p className="text-sm text-gray-300">
          © 2023
          <a href="/" target="_blank" className="mx-1 hover:underline">
            DevCut
          </a>
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
