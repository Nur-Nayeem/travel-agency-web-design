import React from 'react';
import hero from "../assets/hero_jadoo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
    return (
        <div className='flex lg:items-center flex-col-reverse lg:flex-row'>
            <div>
                <h4 className='font-bold lg:text-xl text-lg text-[var(--color-red)] mb-6'>Best Destinations around the world</h4>
                <h1 className='header-text-font lg:text-7xl text-4xl font-bold' >
                    Travel, enjoy and live a new and full life
                </h1>
                <p className='text-[var(--color-text)] my-8'>
                    Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                </p>
                <div className='flex items-center lg:gap-11 gap-6'>
                    <button className='bg-[var(--color-yellow)] py-4 px-6 text-white rounded-xl'>Find out more</button>
                    <button className='flex items-center lg:gap-5 gap-3'>
                        <FontAwesomeIcon icon={faCirclePlay} size="3x" color="red" />
                        <p>Play Demo</p>
                    </button>
                </div>
            </div>
            <figure>
                <img src={hero} alt="" />
            </figure>
        </div>
    );
}
