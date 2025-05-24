import React from "react"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { assets } from "../assets/assets"
export default function PlanCard({ id, desc, price, credits }) {
    const {user} = useContext(AppContext);
    return (
        <div className="bg-white/50 w-72 h-80 gap-3 p-10 rounded-xl shadow ">
            <img src={assets.logo_icon} alt="icon" width={30} className="mt-4 mb-2"/>
            <h3 className="text-xl font-semibold">{id}</h3>
            <p className="text-xs mt-1">{desc}</p>
            <div className="mt-5">
                <span className="text-2xl font-semibold mx-2">${price}</span>
                <span className="text-gray-700 text-xs">/{credits} credits</span>
            </div>
            <div className="flex mt-8 justify-center ">
                <button className="w-full bg-gray-900 text-white rounded-md py-3 font-medium text-sm">{ user ? 'Purchase' : "Get Started"}</button>
            </div>
        </div>
    )
}