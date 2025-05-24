import React from "react";
import { assets } from "../assets/assets";
const Description = () => {
    return (
        <div className="description flex flex-col items-center justify-center my-24 p-6 md:px-28">
            <h1 className="text-3xl sm:text-5xl font-semibold mb-4">Create AI images</h1>
            <p className="text-gray-600 mb-8 text-lg sm:text-xl">Turn your imagination into visuals</p>

            <div className="flex flex-row items-center justify-center gap-14 md:gap-20">
                <img src={assets.sample_img_1} alt="sample image" className="w-80 xl:w-96 rounded-lg " />
                <div>
                    <h2 className="text-3xl font-medium max-w-lg mb-4">Introducing the AI-powered Text to Image Generator</h2>
                    <p className="text-gray-600 mb-4 sm:text-xl text-sm">
                        Easily bring your ideas into lide with our free AI image generator. Whether you need stunning visuals or unique imaginary, out tool transforms your prompt into eye-catching images with just a few clicks. Imagine it,describe it, and watch it come into life instantly.
                    </p>
                    <p className="text-gray-600 sm:text-xl text-sm">
                        Simply type in a text prompt, and out cutting-edge AI will generate high-quality images in seconds. From product visuals to character design and portraits, even concepts that don't yet exist can be visualized effortlessly. Powered by advanced AI technology, our image generator is fast, efficient, and easy to use. The creative possibilities are endless.
                    </p>
                </div>
            </div>
        </div>

    )
}
export default Description;