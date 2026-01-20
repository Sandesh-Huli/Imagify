import GenerateButton from "./GenerateButton";
import { assets } from "../assets/assets";
const Header = () => {
    return (
        <div className="flex flex-col items-center justify-center my-10 font-bold text-center sm:my-20">
            <div className="inline-flex gap-2 px-4 py-1 text-center bg-white border rounded-full sm:px-6 border-neutral-500 ">
                <p className="text-xs sm:text-base">Best text to image generator</p>
            </div>
            <h1 className="text-3xl max-w-[280px] mt-6 sm:text-5xl sm:max-w-[500px] md:text-6xl md:max-w-[700px] lg:text-7xl lg:max-w-[900px] mx-auto">Turn text to <span className="text-blue-600">image</span>, in seconds.</h1>
            <p className="max-w-xl px-4 mx-auto mt-5 text-base text-center text-gray-700 sm:text-lg md:text-xl">Unleash your creativity with AI. Turn your imagination into visual art in seconds - just type, and watch the magic happen</p>
            <GenerateButton />
            <div className="flex flex-wrap justify-center gap-2 mt-10 sm:mt-16 sm:gap-4 ">
                {Array(6).fill('').map((item, index) => (
                    <img src={ index%2 == 0 ? assets.sample_img_1 : assets.sample_img_2} key={index} alt="sample" className="transition-all duration-300 rounded cursor-pointer hover:scale-105 w-14 sm:w-20 md:w-24" />
                ))}
            </div>
            <p className="mt-2 text-neutral-400">Generated images from Imagify</p>
        </div>
    )
}
export default Header;