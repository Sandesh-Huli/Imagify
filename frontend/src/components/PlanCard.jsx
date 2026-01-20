import React from "react"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { assets } from "../assets/assets"
export default function PlanCard({ id, desc, price, credits }) {
    const {user} = useContext(AppContext);
    return (
        <div className="bg-white/50 w-full sm:w-72 md:w-80 lg:w-72 min-h-[320px] gap-3 p-6 sm:p-8 md:p-10 rounded-xl shadow ">
            <img src={assets.logo_icon} alt="icon" width={30} className="mt-2 sm:mt-4 mb-2"/>
            <h3 className="text-lg sm:text-xl font-semibold">{id}</h3>
            <p className="text-xs sm:text-sm mt-1">{desc}</p>
            <div className="mt-4 sm:mt-5">
                <span className="text-xl sm:text-2xl font-semibold mx-2">${price}</span>
                <span className="text-gray-700 text-xs sm:text-sm">/{credits} credits</span>
            </div>
            <div className="flex mt-6 sm:mt-8 justify-center ">
                <button className="w-full bg-gray-900 text-white rounded-md py-2.5 sm:py-3 font-medium text-sm">{ user ? 'Purchase' : "Get Started"}</button>
            </div>
        </div>
    )
}