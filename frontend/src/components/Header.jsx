import GenerateButton from "./GenerateButton";
import { assets } from "../assets/assets";
const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center font-bold my-20">
            <div className="inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500 ">
                <p>Best text to image generator</p>
            </div>
            <h1 className="text-5xl max-w-[300px] mt-10 sm:text-7xl sm:max-w-[600px] max-auto">Turn text to <span className="text-blue-600">image</span>, in seconds.</h1>
            <p className="text-center max-w-xl mx-auto mt-5 text-xl text-gray-700">Unleash your creativity with AI. Turn your imagination into visual art in seconds - just type, and watch the magic happen</p>
            <GenerateButton />
            <div className="flex flex-wrap justify-center mt-16 gap-4 ">
                {Array(6).fill('').map((item, index) => (
                    <img src={ index%2 == 0 ? assets.sample_img_1 : assets.sample_img_2} key={index} alt="sample" width={80} className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10" />
                ))}
            </div>
            <p className="mt-2 text-neutral-400">Generated images from Imagify</p>
        </div>
    )
}
export default Header;