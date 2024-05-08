import Image from 'next/image'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <div className='w-full bg-[#F6F6F6]'>
      <div className='grid md:grid-cols-2 gap-4 items-center md:max-h-[475px] overflow-hidden'>
        <div className='p-6  mx-auto  '>
          <h1 className='sm:text-4xl text-2xl font-bold text-[#202533]'>
            Fresh Arrivals Online
          </h1>
          <p className='mt-4 text-sm text-[#474B57]'>
            Discover Our Newest Collection Today.
          </p>
          <Button
            variant='default'
            className='px-6 py-3 mt-10 rounded text-sm tracking-wider font-semibold border-none outline-none  hover:bg-gray-700 bg-[#0E1422] w-full md:w-full'
          >
            View Collection
          </Button>
        </div>
        {/* <img src="https://readymadeui.com/team-image.webp" className="w-full h-full object-cover shrink-0" /> */}
        <Image
          src='/assets/hero.png'
          width={255}
          height={382}
          alt='heroImage'
          className='object-cover mx-auto shrink-0'
        />
      </div>
    </div>
  )
}

export default Hero
