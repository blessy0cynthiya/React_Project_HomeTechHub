import React from 'react'
import Header from '../Header/Header'
import hero from 'assets/hero.jpg'
import { Link } from 'react-router-dom'

function Hero() {
    return(
      <div className='relative'>
        <Header />
        <div className='bg-center bg-cover bg-fixed bg-no-repeat h-screen md:w-full'
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url("D:\STUDIES\BackGround3.jpeg")` }}>
          <div className='flex flex-col h-full px-4 md:ml-auto md:mt-auto w-full md:w-1/2 justify-center text-white font-display space-y-4 md:space-y-6'>
            <p className='text-3xl md:text-5xl '>
            Say Goodbye To Ordinary Appliances<br></br>Embrace Extraordinary!
            </p>
            <p className='font-light text-lg sm:text-2xl'>Shop Smart,Shop Chic And Let Your Closet Be A Canvas Of Your Adventures!!!</p>
            <Link to="/shop/:collection">
              <button className='bg-red-500 font-body rounded-md text-lg sm:text-2xl p-2 sm:p-4 w-32 sm:w-48 transform duration-200 hover:-translate-y-1 hover:bg-red-600 '>Shop Now</button>
            </Link>
            
          </div>
        </div>
      </div>
  )
}

export default Hero