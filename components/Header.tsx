import Image from 'next/image'
import Link from 'next/link'
import Cart from '../public/assets/cart-line.svg'
import Logo from '../public/assets/logo.svg'
import User from '../public/assets/user-circle.svg'
import { Input } from './ui/input'

const Header = () => {
  return (
    <header className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
      <div className='flex items-center justify-between h-20'>
        <div className='flex items-center justify-center'>
          <div className=' p-2 rounded-full  w-10 h-10 flex items-center justify-center bg-black'>
            <Image
              src={Logo}
              alt='logo'
              width={16}
              height={26}
              className='object-cover'
            />
          </div>
          <span className=' text-xl font-extrabold pl-3'>Ecommerce</span>
        </div>

        {/* <Navigation className='mx-6' /> */}
        <ul className='flex gap-8 font-medium text-md not-italic cursor-pointer font-sans text-[#5C5F6A]'>
          <li className='hover:text-gray-400'>Home</li>
          <li className='hover:text-gray-400'>Categories</li>
          <li className='hover:text-gray-400'>About</li>
          <li className='hover:text-gray-400'>Contact</li>
        </ul>

        {/* Search */}
        <div className='relative'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
            <svg
              className='w-5 h-5 text-gray-500 dark:text-gray-400'
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
            type='search'
            id='default-search'
            className='block w-full p-4 ps-10 text-base text-gray-900 rounded-lg bg-gray-50'
            placeholder='Search products'
            required
          />
        </div>

        {/* Cart */}
        <div className='ml-4 lg:ml-6 flex'>
          <Link href='#' className='group m-2 flex items-center p-2'>
            <Image
              src={Cart}
              alt='cart'
              width={24}
              height={24}
              className='h-6 w-6 flex-shrink-0'
            />
          </Link>
          <Link href='#' className='group m-2 flex items-center p-2'>
            <Image
              src={User}
              alt='user'
              width={24}
              height={24}
              className='h-6 w-6 flex-shrink-0 '
            />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
