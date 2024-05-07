import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex items-center w-full justify-center flex-col my-auto'>
      <p className='text-3xl font-semibold text-gray-900'>404</p>
      <h1 className='mt-2 text-3xl font-medium tracking-tight text-gray-900'>
        Page not found
      </h1>
      <p className='mt-2 text-lg text-gray-600'>
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link
        href='/'
        className='mt-8 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2'
      >
        Go back home
      </Link>
      {/* <Button variant='outline'>butt</Button> */}
    </div>
  )
}
