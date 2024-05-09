"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav className="border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className=" flex h-10  w-10 items-center justify-center rounded-full p-2">
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
          <div className="flex items-center lg:order-2">
            <Link
              href="#"
              className="group m-2 flex items-center p-2 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300"
            >
              <Image
                src="/assets/cart-line.svg"
                alt="cart"
                width={24}
                height={24}
                className="h-6 w-6 flex-shrink-0 object-cover"
              />
            </Link>
            <Link
              href="#"
              className="group m-2 flex items-center p-2 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300"
            >
              <Image
                src="/assets/user-circle.svg"
                alt="user"
                width={24}
                height={24}
                className="h-6 w-6 flex-shrink-0 object-cover"
              />
            </Link>
            {/* <Link
              href='#'
              className='text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800'
            >
              Log in
            </Link>
            <Link
              href='#'
              className='bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'
            >
              Get started
            </Link> */}
            <button
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
              </svg>
            </button>
          </div>
          <div
            className={cn(
              mobileMenuOpen ? "block" : "hidden",
              "w-full items-center justify-between lg:order-1 lg:flex lg:w-auto",
            )}
          >
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8 ">
              <li>
                <a
                  href="/"
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    // <header classNameName='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
    //   <div classNameName='flex items-center justify-between h-20'>
    //     <div classNameName='flex items-center justify-center'>
    //       <div classNameName=' p-2 rounded-full  w-10 h-10 flex items-center justify-center bg-black'>
    //         <Image
    //           src={Logo}
    //           alt='logo'
    //           width={16}
    //           height={26}
    //           classNameName='object-cover'
    //         />
    //       </div>
    //       <span classNameName=' text-xl font-extrabold pl-3'>Ecommerce</span>
    //     </div>

    //     {/* <Navigation classNameName='mx-6' /> */}
    //     <ul classNameName='flex gap-8 font-medium text-md not-italic cursor-pointer font-sans text-[#5C5F6A]'>
    //       <li classNameName='hover:text-gray-400'>Home</li>
    //       <li classNameName='hover:text-gray-400'>Categories</li>
    //       <li classNameName='hover:text-gray-400'>About</li>
    //       <li classNameName='hover:text-gray-400'>Contact</li>
    //     </ul>

    //     {/* Search */}
    //     <div classNameName='relative'>
    //       <div classNameName='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
    //         <svg
    //           classNameName='w-5 h-5 text-gray-500 dark:text-gray-400'
    //           aria-hidden='true'
    //           xmlns='http://www.w3.org/2000/svg'
    //           fill='none'
    //           viewBox='0 0 20 20'
    //         >
    //           <path
    //             stroke='currentColor'
    //             stroke-linecap='round'
    //             stroke-linejoin='round'
    //             stroke-width='2'
    //             d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
    //           />
    //         </svg>
    //       </div>
    //       <Input
    //         type='search'
    //         id='default-search'
    //         classNameName='block w-full p-4 ps-10 text-base text-gray-900 rounded-lg bg-gray-50'
    //         placeholder='Search products'
    //         required
    //       />
    //     </div>

    //     {/* Cart */}
    //     <div classNameName='ml-4 lg:ml-6 flex'>
    //       <Link href='#' classNameName='group m-2 flex items-center p-2'>
    //         <Image
    //           src='/assets/cart-line.svg'
    //           alt='cart'
    //           width={24}
    //           height={24}
    //           classNameName='h-6 w-6 flex-shrink-0'
    //         />
    //       </Link>
    //       <Link href='#' classNameName='group m-2 flex items-center p-2'>
    //         <Image
    //           src='/assets/cart-line.svg'
    //           alt='user'
    //           width={24}
    //           height={24}
    //           classNameName='h-6 w-6 flex-shrink-0 '
    //         />
    //       </Link>
    //     </div>
    //   </div>
    // </header>

    // <div classNameName='bg-white border-gray-200 dark:bg-gray-900'>
    //   <div classNameName='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
    //     <Link
    //       href='/'
    //       classNameName='flex items-center space-x-3 rtl:space-x-reverse'
    //     >
    //       <Image
    //         src={Logo}
    //         alt='logo'
    //         width={32}
    //         height={32}
    //         classNameName='object-center mx-auto h-8 bg-black rounded-full w-8 p-1'
    //       />
    //       <span classNameName='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
    //         Flowbite
    //       </span>
    //     </Link>
    //     <div classNameName='flex md:order-2'>
    //       <button
    //         type='button'
    //         data-collapse-toggle='navbar-search'
    //         aria-controls='navbar-search'
    //         aria-expanded='false'
    //         classNameName='md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1'
    //       >
    //         <svg
    //           classNameName='w-5 h-5'
    //           aria-hidden='true'
    //           xmlns='http://www.w3.org/2000/svg'
    //           fill='none'
    //           viewBox='0 0 20 20'
    //         >
    //           <path
    //             stroke='currentColor'
    //             stroke-linecap='round'
    //             stroke-linejoin='round'
    //             stroke-width='2'
    //             d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
    //           />
    //         </svg>
    //         <span classNameName='sr-only'>Search</span>
    //       </button>
    //       <div classNameName='relative hidden md:block'>
    //         <div classNameName='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
    //           <svg
    //             classNameName='w-4 h-4 text-gray-500 dark:text-gray-400'
    //             aria-hidden='true'
    //             xmlns='http://www.w3.org/2000/svg'
    //             fill='none'
    //             viewBox='0 0 20 20'
    //           >
    //             <path
    //               stroke='currentColor'
    //               stroke-linecap='round'
    //               stroke-linejoin='round'
    //               stroke-width='2'
    //               d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
    //             />
    //           </svg>
    //           <span classNameName='sr-only'>Search icon</span>
    //         </div>
    //         <Input
    //           type='text'
    //           id='search-navbar'
    //           classNameName='block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
    //           placeholder='Search...'
    //         />
    //       </div>
    //       <button
    //         data-collapse-toggle='navbar-search'
    //         type='button'
    //         classNameName='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
    //         aria-controls='navbar-search'
    //         aria-expanded='false'
    //       >
    //         <span classNameName='sr-only'>Open main menu</span>
    //         <svg
    //           classNameName='w-5 h-5'
    //           aria-hidden='true'
    //           xmlns='http://www.w3.org/2000/svg'
    //           fill='none'
    //           viewBox='0 0 17 14'
    //         >
    //           <path
    //             stroke='currentColor'
    //             stroke-linecap='round'
    //             stroke-linejoin='round'
    //             stroke-width='2'
    //             d='M1 1h15M1 7h15M1 13h15'
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //     <div
    //       classNameName='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
    //       id='navbar-search'
    //     >
    //       <div classNameName='relative mt-3 md:hidden'>
    //         <div classNameName='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
    //           <svg
    //             classNameName='w-4 h-4 text-gray-500 dark:text-gray-400'
    //             aria-hidden='true'
    //             xmlns='http://www.w3.org/2000/svg'
    //             fill='none'
    //             viewBox='0 0 20 20'
    //           >
    //             <path
    //               stroke='currentColor'
    //               stroke-linecap='round'
    //               stroke-linejoin='round'
    //               stroke-width='2'
    //               d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
    //             />
    //           </svg>
    //         </div>
    //         <Input
    //           type='text'
    //           id='search-navbar'
    //           classNameName='block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
    //           placeholder='Search...'
    //         />
    //       </div>
    //       <ul classNameName='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
    //         <li>
    //           <a
    //             href='#'
    //             classNameName='block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
    //             aria-current='page'
    //           >
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href='#'
    //             classNameName='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
    //           >
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href='#'
    //             classNameName='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
    //           >
    //             Services
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Header;
