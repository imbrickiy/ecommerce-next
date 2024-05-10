"use client";
// import Link from 'next/link'

// export default function NotFound() {
//   return (
//     <div className='flex items-center w-full justify-center flex-col my-auto'>
//       <p className='text-3xl font-semibold text-gray-900'>404</p>
//       <h1 className='mt-2 text-3xl font-medium tracking-tight text-gray-900'>
//         Page not found
//       </h1>
//       <p className='mt-2 text-lg text-gray-600'>
//         Sorry, we couldn’t find the page you’re looking for.
//       </p>
//       <Link
//         href='/'
//         className='mt-8 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2'
//       >
//         Go back home
//       </Link>
//       {/* <Button variant='outline'>butt</Button> */}
//     </div>
//   )
// }
import { Vortex } from "@/components/ui/vortex";
import Link from "next/link";

export default function VortexDemo() {
  return (
    <div className="mx-auto h-screen  w-full overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex h-full w-full flex-col items-center justify-center px-2 py-4 md:px-10"
      >
        <h2 className="text-center text-5xl font-bold text-white md:text-7xl">
          Page not found
        </h2>
        <p className="mt-6 max-w-xl text-center text-sm text-white md:text-2xl">
          {/* This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
          burned and you&apos;ll have a scar. */}
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row">
          {/* <button className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] transition duration-200 hover:bg-blue-700">
            Order now
          </button> */}
          <Link href="/">
            <button className="px-4 py-2  font-extrabold text-white">
              Go back home
            </button>
          </Link>
        </div>
      </Vortex>
    </div>
  );
}
