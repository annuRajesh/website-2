import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[url(https://media.istockphoto.com/id/1960952508/photo/dark-blue-gradient-soft-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=2BgsCXBCwOgSdNuDzyBLmv2jjApewqatJBORxFgK46E=)] h-96 bg-cover bg-center gap-7 flex flex-col justify-center items-end p-5 '>
        <h1 className='text-7xl text-white font-light max-lg:text-6xl max-sm:text-4xl'>Advance Your Paramedical Career with Confidence</h1>
        <div className="flex items-start w-full">
        <button className='border border-white text-white px-10 py-3 hover:bg-white hover:text-black duration-300'>Let's Talk</button>


        </div>
    </div>
  )
}

export default Hero