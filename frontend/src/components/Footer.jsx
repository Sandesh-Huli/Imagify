import React from "react";
import { assets } from "../assets/assets";
const Footer = () => {
    return (
        <div className=" flex flex-row flex-wrap justify-between pb-4">
            <div className="flex flex-row items-center justify-center gap-12">
                <img src={assets.logo} alt="logo" />
                <p className="text-gray-600">|</p>
                <p className="text-gray-600">All rights reserved. Copyright &copy; imagica</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-3">
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