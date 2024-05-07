import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/assets/logo.svg'
import { Input } from './ui/input'

const Header = () => {
  return (
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
    //           src={Cart}
    //           alt='cart'
    //           width={24}
    //           height={24}
    //           classNameName='h-6 w-6 flex-shrink-0'
    //         />
    //       </Link>
    //       <Link href='#' classNameName='group m-2 flex items-center p-2'>
    //         <Image
    //           src={User}
    //           alt='user'
    //           width={24}
    //           height={24}
    //           classNameName='h-6 w-6 flex-shrink-0 '
    //         />
    //       </Link>
    //     </div>
    //   </div>
    // </header>

    <div className='bg-white border-gray-200 dark:bg-gray-900'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link
          href='/'
          className='flex items-center space-x-3 rtl:space-x-reverse'
        >
          <Image
            src={Logo}
            alt='logo'
            width={32}
            height={32}
            className='object-center mx-auto h-8 bg-black rounded-full w-8 p-1'
          />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            Flowbite
          </span>
        </Link>
        <div className='flex md:order-2'>
          <button
            type='button'
            data-collapse-toggle='navbar-search'
            aria-controls='navbar-search'
            aria-expanded='false'
            className='md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1'
          >
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
            <span className='sr-only'>Search</span>
          </button>
          <div className='relative hidden md:block'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
              <svg
                className='w-4 h-4 text-gray-500 dark:text-gray-400'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
              <span className='sr-only'>Search icon</span>
            </div>
            <Input
              type='text'
              id='search-navbar'
              className='block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Search...'
            />
          </div>
          <button
            data-collapse-toggle='navbar-search'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-search'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>
        <div
          className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
          id='navbar-search'
        >
          <div className='relative mt-3 md:hidden'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
              <svg
                className='w-4 h-4 text-gray-500 dark:text-gray-400'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
            </div>
            <Input
              type='text'
              id='search-navbar'
              className='block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Search...'
            />
          </div>
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
