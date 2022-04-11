import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CardsApi from '../components/api/cardsitem.json'
import { AiFillYoutube } from 'react-icons/ai'


const Crads = () => {
 

    const [cards, setCards] = useState([])

    useEffect(() => {
        setCards(CardsApi)
    }, [])
    return (
        <div className=' relative '>
            <div className='relative h-[1050px]'>
                <h2 className='text-latest text-[300px]  text-center font-bold mt-12'>LATEST</h2>
                <div className='container  absolute top-64  mx-auto items-center justify-center flex flex-wrap gap-x-8 gap-y-8'>
                    {cards.length && cards.map(card => (
                        <div className='flex flex-col mb-8 '>
                            <img className='w-[360px] h-[202px] object-cover mb-4 transition cursor-pointer duration-300 hover:scale-105' src={card.image} alt="" />
                            <h3 className='text-white text-xl font-bold cursor-pointer transition  hover:text-redhover'>{card.title}</h3>
                        </div>

                    ))}
                    <button className='w-52 h-[60px]  relative bg-buttoncolor2 text-white text-base font-bold flex items-center justify-center gap-x-4  transition hover:bg-redhover'>
                        MORE VIDEOS <AiFillYoutube color='white' size={16} />
                    </button>

                </div>

            </div>
        </div>
    )
}

export default Crads