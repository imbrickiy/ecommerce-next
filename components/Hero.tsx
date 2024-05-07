import Image from 'next/image'
import Logo from '../public/assets/logo.svg'

const Hero = () => {
  return (
    <div className='mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40'>
      <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-lg'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
          Ecommerce
        </h1>
        <p className='mt-6 text-lg leading-8 text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        </p>
      </div>
			<div className=''>
				<div className="flex items-center">
        <Image
          src={Logo}
          alt='hero image'
          width={300}
          height={300}
          className=' bg-black object-cover' 
        /></div>
      </div>
    </div>
  )
}

export default Hero
