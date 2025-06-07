import { useState } from "react";
import { assets } from "../assets/assets";
import PromptBar from "../components/PromptBar";
import { div } from "motion/react-client";
export default function Result() {
    const [image, setImage] = useState(assets.sample_img_1);
    const [isImageLoaded, setIsImageLoaded] = useState(true);
    const [loading, setLoading] = useState(true);
    const handleDownload = () => {
        alert("you are downlaoading this image");
    }
    const handleGenerate = async (e) => {//yet to complete
        setIsImageLoaded(false);
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-12">
            {isImageLoaded &&
                <div className="relative">
                    <img src={image} alt="sample-img" className="max-w-sm rounded " />
                    {
                        loading &&
                        <span className="absolute bottom-0 left-0 h-1.5 bg-blue-500 w-full transition-all duration-[10s] ease-in-out">Loading....</span>
                    }
                </div>
            }
            {!isImageLoaded &&
                <PromptBar />
            }
            {isImageLoaded &&
                <div className="flex flex-col gap-4 item">
                    <a href={image} onClick={handleDownload} download className="border border-black text-black px-8 py-3 rounded-full cursor-pointer text-center">Download this image</a>
                    <button onClick={handleGenerate} className="bg-zinc-900  px-10 py-3 rounded-full cursor-pointer text-white text-center" >Generate another image</button>
                </div>
            }
        </div>

    );
}