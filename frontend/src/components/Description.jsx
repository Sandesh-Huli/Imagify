import React from "react";
import { assets } from "../assets/assets";
const Description = () => {
    return (
        <div className="description flex flex-col items-center justify-center my-12 sm:my-24 p-4 sm:p-6 md:px-28">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4">Create AI images</h1>
            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg md:text-xl">Turn your imagination into visuals</p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 lg:gap-20">
                <img src={assets.sample_img_1} alt="sample image" className="w-full max-w-xs sm:max-w-sm md:w-80 lg:w-96 rounded-lg " />
                <div className="max-w-lg">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-3 sm:mb-4">Introducing the AI-powered Text to Image Generator</h2>
                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">
                        Easily bring your ideas into lide with our free AI image generator. Whether you need stunning visuals or unique imaginary, out tool transforms your prompt into eye-catching images with just a few clicks. Imagine it,describe it, and watch it come into life instantly.
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                        Simply type in a text prompt, and out cutting-edge AI will generate high-quality images in seconds. From product visuals to character design and portraits, even concepts that don't yet exist can be visualized effortlessly. Powered by advanced AI technology, our image generator is fast, efficient, and easy to use. The creative possibilities are endless.
                    </p>
                </div>
            </div>
        </div>

    )
}
export default Description;