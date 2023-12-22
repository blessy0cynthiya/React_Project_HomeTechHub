import React from 'react'
import { Link, useParams } from 'react-router-dom'

function ShopNav() {
    let name = useParams()

    return(
        <div className='overflow-hidden'>
            <div className='font-display mt-12 mb-2 text-3xl md:text-4xl font-medium text-center text-gray-700'>
                {name.collection === undefined && <h1> Appliance Collection </h1>}
                {name.collection === 'airPurifying' && <h1>Air Condition</h1>}
                {name.collection === 'beginner' && <h1>Plants for Beginners</h1>}
                {name.collection === 'pet-friendly' && <h1>Pet Friendly Plants</h1>}
                {name.collection === 'succulents' && <h1>Laptops</h1>}
            </div>
            <div className='font-body text-gray-600 text-center'>
                {name.collection === undefined && <p>Shopping for Appliances has never been easier</p>}
                {name.collection === 'airPurifying' && <p>Effortless living starts with the right tools.🛠️💡</p>}
                {name.collection === 'beginner' && <p>Where functionality meets elegance. 🌺🔧</p>}
                {name.collection === 'pet-friendly' && <p>From kitchen to living room, upgrading the way we live. 🌐🏡</p>}
                {name.collection === 'succulents' && <p>Smart appliances for a smarter lifestyle. 🤖🏠</p>}
            </div>

            <div className='flex flex-wrap space-y-2 md:space-y-0 space-x-2 md:space-x-4 w-full items-end
            justify-center md:mt-6 mb-6 md:mb-12 font-body text-gray-700'>
                <Link to={'/shop'} className={name.collection === undefined && 'hidden'}>
                    <button className='p-2 border-2 rounded-lg bg-red-200 hover:bg-gray-300 hover:bg-opacity-40'>Shop All</button>
                </Link>
                <Link to={`/shop/airPurifying`} className={name.collection === 'airPurifying' && 'hidden'}>
                    <button className='p-2 border-2 rounded-lg bg-red-200  hover:bg-gray-300 hover:bg-opacity-40'>Air Conditioner</button>
                </Link>
                <Link to={`/shop/beginner`} className={name.collection === 'beginner' && 'hidden'}>
                    <button className='p-2 border-2 rounded-lg bg-red-200  hover:bg-gray-300 hover:bg-opacity-40'>Washing Machine</button>
                </Link>
                <Link to={`/shop/pet-friendly`} className={name.collection === 'pet-friendly' && 'hidden'}>
                    <button className='p-2 border-2 rounded-lg bg-red-200 hover:bg-gray-300 hover:bg-opacity-40'>Mobile</button>
                </Link>
                <Link to={`/shop/succulents`} className={name.collection === 'succulents' && 'hidden'}>
                    <button className='p-2 border-2 rounded-lg bg-red-200 hover:bg-gray-300 hover:bg-opacity-40'>Laptops</button>
                </Link>
            </div>
        </div>
    )
}

export default ShopNav