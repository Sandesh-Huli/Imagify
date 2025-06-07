import React, { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"
import { AppContext } from "../context/AppContext";
import Profile from "./Profile";
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
            const response = await fetch(`http://localhost:8080/user/logout`,{
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
                            <button className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-2 sm:py-4 rounded-full hover:scale-105 transition-all duration-500" onClick={() => navigate('/buy')}>
                                <img src={assets.credit_star} alt="profile" className="w-10 h-10 rounded-full" />
                                <p className="text-sm sm:text-smfont-medium text-gray-900 max-sm:hidden">Credits left: {user.creditBalance} </p>
                            </button>
                            <div className="relative group flex items-center gap-4 cursor-pointer">
                                <p>
                                    Hello {user.username}
                                </p>
                                <img src={assets.profile_icon} alt="profile" className="w-10 drop-shadow " />
                                <div className="absolute top-0 right-0 hidden group-hover:block top-0 right-0 z-10 rounded pt-12">
                                    <ul className="list-none m-0 p-2 bg-white rounded-md border text-md">
                                        <li className="py-2 px-2 hover:bg-zinc-100 cursor-pointer" onClick={handleProfileClick}>Profile</li>
                                        <li className="py-2 px-2 hover:bg-zinc-100 cursor-pointer" onClick={handleLogoutClick}>Logout</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="flex items-center gap-4 sm:gap-6">
                            <p className="cursor-pointer " onClick={() => (navigate('/buy'))}>Pricing</p>
                            <button className="bg-zinc-800 text-white px-6 py-2 rounded-md sm:px-10 " onClick={() => setShowLogin(true)}>
                                {authMode == 'SignUp' ? 'Sign Up' : 'Login'}</button>
                        </div>
                }


            </div>
        </div>
    )
}