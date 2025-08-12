import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Category from '../components/Category'
import TopDestination from '../components/TopDestination'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Category />
            <TopDestination />
        </div>
    )
}

export default Home