import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/jadoo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center goole-font-sans mb-10'>
            <div className='lg:h-10 h-7'>
                <img className='h-full w-full' src={logo} alt="" />
            </div>
            <div className='lg:hidden block'>
                <FontAwesomeIcon icon={faEllipsisVertical} size='2x' />
            </div>
            <div className='lg:flex gap-20 hidden'>
                <ul className='flex gap-12 my-11 text-lg font-medium cursor-pointer'>
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
                <div className='flex justify-between gap-12 items-center text-lg font-medium'>
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