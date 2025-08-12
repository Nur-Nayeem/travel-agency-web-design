import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/jadoo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const handleSideNav = () => {
        setShowNav((prev) => !prev);
    }
    return (
        <div className='flex justify-between items-center goole-font-sans mb-10'>
            <div>
                <h1 className='text-3xl font-bold'><span className='text-[var(--color-yellow)]'>NUR</span>TRAVEL</h1>
            </div>

            <div className='lg:flex gap-20'>
                <div className='lg:hidden block' onClick={handleSideNav}>
                    <FontAwesomeIcon icon={faEllipsisVertical} size='2x' />
                </div>
                <ul className={`lg:flex lg:gap-12 my-11 text-lg font-medium cursor-pointer ${showNav ? 'flex flex-col w-full absolute left-0 top-5 bg-white items-start gap-6 px-2 py-3 shadow-xl' : 'hidden'}`}>
                    <li>
                        <Link to={"/"}>Desitnations</Link>
                    </li>
                    <li>
                        <Link to={"/hotels"}>Hotels</Link>
                    </li>
                    <li>
                        <Link to={"/flights"}>Flights</Link>
                    </li>
                    <li>
                        <Link to={"/bookings"}>Bookings</Link>
                    </li>
                </ul>
                <div className='lg:flex justify-between gap-12 items-center text-lg font-medium hidden'>
                    <button className='cursor-pointer'>Login</button>
                    <button className='border rounded-md py-2.5 px-5 cursor-pointer'>Sign up</button>
                    <div>
                        <p>EN <span className='cursor-pointer'>^</span></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar