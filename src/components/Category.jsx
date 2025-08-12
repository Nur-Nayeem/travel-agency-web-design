import React from 'react'
import dish from "../assets/card-icons/dish.png"
import plane from "../assets/card-icons/plane.png"
import microphone from "../assets/card-icons/microphone.png"
import settings from "../assets/card-icons/setting.png"

const Card = ({ img, header, des }) => {
    return (
        <div className='max-w-[270px] flex flex-col items-center transition-shadow duration-300 hover:shadow-lg rounded-3xl px-6 pb-6'>
            <figure className='max-w-42 h-36 mb-6'>
                <img className='w-full h-full' src={img} alt="" />
            </figure>
            <h3 className='text-center text-xl font-semibold mb-4'>{header}</h3>
            <p className='text-center font-medium text-[var(--color-text)]'>{des}</p>
        </div>
    )
}

const cardData = [
    {
        img: dish,
        header: "Calculated Weather",
        des: "Built Wicket longer admire do barton vanity itself do in it."
    },
    {
        img: plane,
        header: "Calculated Weather",
        des: "Built Wicket longer admire do barton vanity itself do in it."
    },
    {
        img: microphone,
        header: "Calculated Weather",
        des: "Built Wicket longer admire do barton vanity itself do in it."
    },
    {
        img: settings,
        header: "Calculated Weather",
        des: "Built Wicket longer admire do barton vanity itself do in it."
    },
]


const Category = () => {
    return (
        <div className='my-24'>
            <div className='text-center'>
                <h4 className='text-[var(--color-text)] text-lg font-semibold my-2.5'>CATEGORY</h4>
                <h2 className='header-text-font text-5xl font-bold'>We Offer Best Services</h2>
            </div>
            <div className='flex lg:flex-row flex-col items-center lg:justify-between mt-16'>
                {
                    cardData.map((item, index) => {
                        return <Card key={index} img={item.img} header={item.header} des={item.des} />
                    })
                }
            </div>
        </div>
    )
}

export default Category