import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
const GenerateButton = () => {

    const navigate = useNavigate();
    const { user, setShowLogin } = useContext(AppContext);
    const handleClick = () => {
        if (user) {
            navigate('/result');
        } else {
            setShowLogin(true);
        }
    }
    return (
        <div>
            <button className="text-sm sm:text-base md:text-lg text-white bg-black width-auto mt-6 sm:mt-8 px-6 sm:px-10 md:px-12 py-2.5 sm:py-3 flex items-center rounded-full gap-2 sm:gap-3 md:gap-4 hover:bg-neutral-800 transition-all duration-300" onClick={handleClick}>
                <p className="text-sm sm:text-base">Generate images</p>
                <img src={assets.star_group} alt="arrow" className="inline-block h-6 sm:h-7 md:h-8" />
            </button>
        </ div>
    );
}
export default GenerateButton;