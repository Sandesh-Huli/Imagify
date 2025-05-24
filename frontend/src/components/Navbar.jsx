import React, { use, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"
import { AppContext } from "../context/AppContext";
export default function Navbar() {
    const { user,setShowLogin } = useContext(AppContext)
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/logout');
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
                                <p className="text-sm sm:text-smfont-medium text-gray-900 max-sm:hidden">Credits left: 60 </p>
                            </button>
                            <p>
                                Hello, User
                            </p>
                            <div className="relative group">
                                <img src={assets.profile_icon} alt="profile" className="w-10 drop-shadow " />
                                <div className="absolute top-0 right-0 hidden group-hover:block top-0 right-0 z-10 rounded pt-12">
                                    <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                                        <li className="py-1 px-2 hover:bg-zinc-100 cursor-pointer" onClick={handleClick}>Logout</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="flex items-center gap-4 sm:gap-6">
                            <p className="cursor-pointer " onClick={() => (navigate('/buy'))}>Pricing</p>
                            <button className="bg-zinc-800 text-white px-6 py-2 rounded-md sm:px-10 " onClick={() => setShowLogin(true)}>Log in</button>
                        </div>
                }


            </div>
        </div>
    )
}