import Link from 'next/link'

const NotificationBar = () => {
  return (
    <p className='flex h-10 items-center justify-center bg-gray-900 px-4 text-sm font-medium text-white sm:px-6 lg:px-8 '>
      Get 25% OFF on your first order.
      <Link href='/'>
        <span className='ml-1 font-extrabold'>Order Now</span>
      </Link>
    </p>
  )
}

export default NotificationBar
