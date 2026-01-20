import { useContext, useRef, useEffect } from "react";
import { AppContext } from "../context/AppContext";

export default function Profile({ user }) {
    const { setShowProfile } = useContext(AppContext);
    const panelRef = useRef(null);
    //close when click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (panelRef.current && !panelRef.current.contains(event.target)) {
                setShowProfile(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [setShowProfile])
    if (!user) return null;
    return (
        <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-30">
            <div
                ref={panelRef}
                className="w-full sm:w-80 h-fit bg-white shadow-lg p-4 sm:p-6 rounded-l-2xl animate-slide-in mt-16 sm:mt-24"
            >
                <h1 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Profile</h1>
                <div className="space-y-2 text-gray-700">
                    <p className="font-medium">{user.username}</p>
                    <p className="text-sm">{user.email}</p>
                    <p className="mt-4 font-semibold">Credits Left: {user.creditBalance}</p>
                    <p className="mt-4 font-semibold">Images Generated</p>
                    <ul className="text-sm list-disc list-inside">
                        <li>Image 1</li>
                        <li>Image 2</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
