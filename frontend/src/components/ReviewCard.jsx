import React from "react";
import { assets } from "../assets/assets";
const ReviewCard = ({ image, name, role, stars, text }) => {

    const times = Array(stars).fill(0);
    return (
        <div className="flex flex-col items-center bg-white/80 text-center rounded-lg h-80 w-96 p-4 gap-3 hover:scale-105 transition-all duration-300 ease-in-out">
            <img src={image} alt="img" className="w-22 rounded-full mt-2" />
            <p className="font-semibold text-xl">{name}</p>
            <p className="text-gray-600">{role}</p>
            <div className="flex gap-2">
                {
                    times.map((_, index) => (
                        <img src={assets.rating_star} alt="star" />
                    ))
                }
            </div>
            <p className="text-black-900">{text}</p>
        </div>
    )
}
export default ReviewCard;