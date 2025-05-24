import { useNavigate} from "react-router-dom"
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
const GenerateButton = () =>{
    const navigate = useNavigate();
    const {user,setShowLogin} = useContext(AppContext);
    const handleClick = ()=>{
        if(user){
            navigate('/result');
        }else{
            setShowLogin(true);
        }
    }
    return(
        <div>
            <button className="sm:text-lg text-white bg-black width-auto mt-8 px-12 py-3 flex items-center rounded-full gap-4 hover:bg-neutral-800 transition-all duration-300" onClick={handleClick}>
                <p className="text-md ">Generate images</p>
                <img src={assets.star_group} alt="arrow" className="inline-block ml-2 h-8" />
            </button>
        </div>
    );
}
export default GenerateButton;