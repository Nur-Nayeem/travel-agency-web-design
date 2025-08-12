import React from 'react'
import italy from "../assets/place/rome.jpg"
import london from "../assets/place/london.jpg"
import paris from "../assets/place/paris.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const trips = [
    {
        img: italy,
        place: "Rome, Italty",
        cost: "$5.42k",
        duration: "10 Days Trip"
    },
    {
        img: london,
        place: "London, UK",
        cost: "$4.2k",
        duration: "12 Days Trip"
    },
    {
        img: paris,
        place: "Paris,Franch",
        cost: "$6.5k",
        duration: "15 Days Trip"
    },
]

const PlaceCard = ({ img, place, cost, duration }) => {
    return (
        <div className='max-w-[320px] h-[460px] relative shadow-xl rounded-3xl'>
            <img className='w-full h-full rounded-3xl rounded-b-4xl' src={img} alt="Italy" />
            <div className='absolute bg-white w-full bottom-0 p-5 rounded-b-3xl'>
                <div className='flex justify-between mb-4 font-medium text-lg'>
                    <h5>{place}</h5>
                    <h6>{cost}</h6>
                </div>
                <div className='flex gap-1.5 items-center font-medium'>
                    <FontAwesomeIcon icon={faLocationArrow} />
                    <h5>{duration}</h5>
                </div>

            </div>
        </div>
    )
}

const TopDestination = () => {
    return (
        <div className='my-24'>
            <div className='text-center'>
                <h4 className='text-[var(--color-text)] text-lg font-semibold my-2.5'>Top Selling</h4>
                <h2 className='header-text-font text-5xl font-bold'>Top Destinations</h2>
            </div>
            <div className='flex lg:flex-row flex-col items-center lg:justify-between mt-16'>
                {
                    trips.map((item, index) => {
                        return <PlaceCard key={index} img={item.img} place={item.place} cost={item.cost} duration={item.duration} />
                    })
                }
            </div>
        </div>
    )
}

export default TopDestination