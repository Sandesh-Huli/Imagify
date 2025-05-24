import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";


const Login = () => {
    const [state, setState] = useState('Sign Up');
    const { setShowLogin } = useContext(AppContext);
    const handleClick = () => {
        if (state === 'Sign Up') {
            setState('Login');
        } else {
            setState('Sign Up');
        }
    }
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    },
        []
    );
    return (
        <div className=" fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/10 flex justify-center items-center">
            <form action="" className="relative bg-white p-10 rounded-xl border border-white/20 text-slate-500">
                <img src={assets.cross_icon} alt="back" className="absolute top-6 right-6 cursor-pointer h-3" onClick={() => setShowLogin(false)} />
                <h1 className="text-2xl text-center text-neutral-700 font-medium">{state}</h1>
                <p className="text-sm text-center text-neutral-500">Please {state} to use Imagify</p>
                <div className="border px-6 py-2 flex item-center gap-2 rounded-full mt-5 ">
                    <img src={assets.profile_icon} alt="user" className="w-8 h-8" />
                    <input type="text" placeholder="Enter your username" required className="outline-none text-sm" />
                </div>
                {state === 'Sign Up' &&
                    <>
                        <div className="border px-6 py-2 flex item-center gap-2 rounded-full mt-5 ">
                            <img src={assets.email_icon} alt="email" className="w-8 h-8" />
                            <input type="text" placeholder="Enter your email id" required className="outline-none text-sm" />
                        </div>

                        <div className="border px-6 py-2 flex item-center gap-2 rounded-full mt-5 ">
                            <img src={assets.lock_icon} alt="password" className="w-8 h-8" />
                            <input type="text" placeholder="Create password" required className="outline-none text-sm" />
                        </div>

                        <div className="border px-6 py-2 flex item-center gap-2 rounded-full mt-5 ">
                            <img src={assets.lock_icon} alt="password" className="w-8 h-8" />
                            <input type="text" placeholder="Confirm password" required className="outline-none text-sm" />
                        </div>
                    </>
                }
                {state === 'Login' &&
                    <div className="border px-6 py-2 flex item-center gap-2 rounded-full mt-5 ">
                        <img src={assets.lock_icon} alt="password" className="w-8 h-8" />
                        <input type="text" placeholder="Enter password" required className="outline-none text-sm" />
                    </div>
                }
                <button className="bg-blue-500 text-white py-2 rounded-full w-full text-sm mt-5 " >{state}</button>
                {state === 'Login' &&
                    <>
                        <p className="text-sm text-blue-500 my-2 mx-1 cursor-pointer text-center">Forgot password? </p>
                        <p className="text-sm mt-5 text-center">
                            Don't have an account?
                            <span className="text-blue-500 cursor-pointer" onClick={handleClick}> Sign up</span>
                        </p>
                    </>
                }
                {state === 'Sign Up' &&
                    <p className="text-sm mt-5 text-center">
                        Already have an account?
                        <span className="text-blue-500 cursor-pointer" onClick={handleClick}> Login</span>
                    </p>
                }
            </form>
        </div>
    );
}
export default Login;