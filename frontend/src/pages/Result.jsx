import { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import BuyCredit from './BuyCredit'
import { div } from "motion/react-client";
import { useNavigate } from "react-router-dom";
// import PromptBar from "../components/PromptBar";
const backend_uri = import.meta.env.VITE_BACKEND_URI;
export default function Result() {
    const [image, setImage] = useState(assets.sample_img_1);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState("");
    const { user, setUser } = useContext(AppContext);
    const navigate = useNavigate();
    const handleChange = (e) => {
        console.log(user.creditBalance);
        setInput(e.target.value);
    }
    const handleDownload = () => {
        alert("you are downlaoading this image");
    }
    // const generateImage = async (prompt) => {
    //     try {
    //         const result = await axios.post('http://localhost:8080/image/generate', { prompt })
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    const handleGenerate = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);
            if (user.creditBalance > 0) {
                const response = await fetch(`${backend_uri}/image/generate`, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        prompt: input
                    })
                })
                const data = await response.json();
                console.log(data);
                if (data.success && data.result) {
                    console.log('image generated successfully')
                    setIsImageLoaded(true);
                    setImage(data.result);
                } else {
                    console.log(data.message || 'error generating image')
                }
                setLoading(false);
            } else {
                navigate('/buy');
            }
        } catch (err) {
            console.log(err);
        }

    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-6 sm:gap-10 py-8 px-4">
            <img src={image} alt="sample-img" className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded" />
            {isImageLoaded &&
                <div className="relative">
                    {
                        loading &&
                        <span className="absolute bottom-0 left-0 h-1.5 bg-blue-500 w-full transition-all duration-[10s] ease-in-out">Loading....</span>
                    }
                </div>
            }
            {!isImageLoaded &&
                <>
                    <div className="flex items-center bg-gray-600 rounded-full p-1 w-full max-w-xl">
                        <input type="text" placeholder="Describe what you want to generate" className="flex-grow bg-transparent text-white placeholder-white outline-none px-3 sm:px-4 text-sm sm:text-base" value={input} onChange={handleChange} />
                        <button className="bg-gray-900 text-white rounded-full px-4 sm:px-6 py-2 shadow text-sm sm:text-base" onClick={handleGenerate}>Generate</button>
                    </div>

                </>
            }
            {isImageLoaded &&
                <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-xs sm:max-w-sm">
                    <a href={image} onClick={handleDownload} download className="border border-black text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full cursor-pointer text-center text-sm sm:text-base">Download this image</a>
                    <button onClick={handleGenerate} className="bg-zinc-900 px-6 sm:px-10 py-2.5 sm:py-3 rounded-full cursor-pointer text-white text-center text-sm sm:text-base" >Generate another image</button>
                </div>
            }
        </div>

    );
}