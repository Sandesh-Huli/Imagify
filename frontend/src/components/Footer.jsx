import React from "react";
import { assets } from "../assets/assets";
const Footer = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center pb-4 px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 md:gap-12">
                <img src={assets.logo} alt="logo" className="w-24 sm:w-28" />
                <p className="text-gray-600 hidden sm:block">|</p>
                <p className="text-gray-600 text-xs sm:text-sm text-center">All rights reserved. Copyright &copy; imagica</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
                <button className=" opacity-45 hover:opacity-80 hover:scale-110 duration-900">
                    <img src={assets.facebook_icon} alt="" />
                </button>
                <button className=" opacity-45 hover:opacity-80 hover:scale-110 duration-900">
                    <img src={assets.twitter_icon} alt="" />
                </button>
                <button className=" opacity-45 hover:opacity-80 hover:scale-110 duration-900">
                    <img src={assets.instagram_icon} alt="" />
                </button>
            </div>
        </div>
    )
}
export default Footer;