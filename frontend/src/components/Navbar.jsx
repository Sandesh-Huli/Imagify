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
        <div className="container flex items-center justify-between py-4">
            <Link to="/">
                <img src={assets.logo} alt="logo" className="logo w-28 sm:w-32 lg:w-40" />
            </Link>
            <div>
                {
                    user ?
                        <div className="flex items-center gap-4 sm:gap-6">
                            <button className="flex items-center gap-2 px-4 py-2 transition-all duration-500 bg-blue-100 rounded-full sm:px-6 sm:py-4 hover:scale-105" onClick={() => navigate('/buy')}>
                                <img src={assets.credit_star} alt="profile" className="w-10 h-10 rounded-full" />
                                <p className="text-sm text-gray-900 sm:text-smfont-medium max-sm:hidden">Credits left: {user.creditBalance} </p>
                            </button>
                            <div className="relative flex items-center gap-4 cursor-pointer group">
                                <p>
                                    Hello {user.username}
                                </p>
                                <img src={assets.profile_icon} alt="profile" className="w-10 drop-shadow " />
                                <div className="absolute top-0 right-0 z-10 hidden pt-12 rounded group-hover:block">
                                    <ul className="p-2 m-0 list-none bg-white border rounded-md text-md">
                                        <li className="px-2 py-2 cursor-pointer hover:bg-zinc-100" onClick={handleProfileClick}>Profile</li>
                                        <li className="px-2 py-2 cursor-pointer hover:bg-zinc-100" onClick={handleLogoutClick}>Logout</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="flex items-center gap-4 sm:gap-6">
                            <p className="cursor-pointer " onClick={() => (navigate('/buy'))}>Pricing</p>
                            <button className="px-6 py-2 text-white rounded-md bg-zinc-800 sm:px-10 " onClick={() => setShowLogin(true)}>
                                {authMode == 'SignUp' ? 'Sign Up' : 'Login'}</button>
                        </div>
                }
            </div>
        </div>
    )
}