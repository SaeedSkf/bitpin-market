import React from 'react'

const PriceRow = ({ firstImage, secondImage, title, subtitle, price, currency }) => {
    return (
        <div class="flex ">
            <div class="relative">
                <img src={firstImage} alt="title" className="w-10 h-10 rounded-full" />
                <div class="absolute -bottom-1 -right-1 bg-white rounded-full">
                    <img src={secondImage} className="w-4 h-4 rounded-full bg-[#209f79]" />
                </div>
            </div>

        </div>
    )
}

export default PriceRow