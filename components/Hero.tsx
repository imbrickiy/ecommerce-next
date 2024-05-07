import Image from 'next/image'
import Arrow from '../public/assets/arrow-left.svg'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <div className='overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20'>
          <div className='relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6'>
            <h1 className='text-4xl font-medium tracking-tight text-gray-900'>
              Fresh Arrivals Online
            </h1>
            <p className='mt-6 text-lg text-gray-600'>
              Discover Our Newest Collection Today.
            </p>
            <div className='mt-8'>
              <Button className='bg-black text-white'>
                <span className='ml-2.5'>View Collection</span>
                <Image
                  src={Arrow}
                  alt='arrow'
                  className='h-4 w-4 flex-none rotate-180 ml-2 mr-0.5'
                />
              </Button>
            </div>
          </div>
          <div className='relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6'>
            <div className='absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0' />
            <div className='-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32'>
              Insert image here
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
