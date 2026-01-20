import React, { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"
import { AppContext } from "../context/AppContext";
import Profile from "./Profile";
const backend_uri = import.meta.env.VITE_BACKEND_URI;
export default function Navbar() {
    const { user, setShowLogin, authMode, setAuthMode, showProfile, setShowProfile, setUser } = useContext(AppContext);
    const navigate = useNavigate();

    const handleProfileClick = () => {
        console.log("profile clicked");
        setShowProfile(true);
    }
    const handleLogoutClick = async () => {
        try{
            console.log('logout clicked');
            const response = await fetch(`${backend_uri}/user/logout`,{
                method: 'GET',
                credentials: 'include'
            });
            const data = await response.json();
            console.log(data);
            if(response.ok){
                setShowLogin(true);
                setAuthMode('Login');
                setUser(null);
            }else{
                alert(data.message || "logout failed");
            }
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div className="container flex items-center justify-between py-3 sm:py-4">
            <Link to="/">
                <img src={assets.logo} alt="logo" className="logo w-24 sm:w-28 md:w-32 lg:w-40" />
            </Link>
            <div>
                {
                    user ?
                        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
                            <button className="flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 transition-all duration-500 bg-blue-100 rounded-full hover:scale-105" onClick={() => navigate('/buy')}>
                                <img src={assets.credit_star} alt="profile" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full" />
                                <p className="text-xs sm:text-sm text-gray-900 font-medium hidden sm:block">Credits: {user.creditBalance} </p>
                            </button>
                            <div className="relative flex items-center gap-2 sm:gap-3 md:gap-4 cursor-pointer group">
                                <p className="text-xs sm:text-sm md:text-base hidden md:block">
                                    Hello {user.username}
                                </p>
                                <img src={assets.profile_icon} alt="profile" className="w-8 sm:w-9 md:w-10 drop-shadow " />
                                <div className="absolute top-0 right-0 z-10 hidden pt-12 rounded group-hover:block">
                                    <ul className="p-2 m-0 list-none bg-white border rounded-md text-md">
                                        <li className="px-2 py-2 cursor-pointer hover:bg-zinc-100" onClick={handleProfileClick}>Profile</li>
                                        <li className="px-2 py-2 cursor-pointer hover:bg-zinc-100" onClick={handleLogoutClick}>Logout</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
                            <p className="cursor-pointer text-sm sm:text-base" onClick={() => (navigate('/buy'))}>Pricing</p>
                            <button className="px-4 py-2 sm:px-6 md:px-10 text-sm sm:text-base text-white rounded-md bg-zinc-800 " onClick={() => setShowLogin(true)}>
                                {authMode == 'SignUp' ? 'Sign Up' : 'Login'}</button>
                        </div>
                }
            </div>
        </div>
    )
}