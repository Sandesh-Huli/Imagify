import React from "react";
import { testimonialsData } from "../assets/assets";
import ReviewCard from "./ReviewCard";

const Testimonials = () => {
    return (
        <div className="flex flex-col gap-2 items-center justify-center py-10 sm:py-20 px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Customer testimonials</h1>
            <p className="text-gray-800 text-base sm:text-lg mt-2">What our users are saying</p>
            <div className="flex flex-row gap-4 mt-5 overflow-x-auto w-full max-w-6xl pb-4 scrollbar-hide">
                {testimonialsData.map((testimonial, index) => (
                    <ReviewCard
                        key={index} // Ensure each component has a unique key
                        image={testimonial.image}
                        name={testimonial.name}
                        role={testimonial.role}
                        stars={testimonial.stars}
                        text={testimonial.text}
                    />
                ))}

            </div>
        </div>
    )
}
export default Testimonials;