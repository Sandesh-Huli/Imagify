import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
const backend_uri = import.meta.env.VITE_BACKEND_URI;

const Login = ({ setUser }) => {
    const { authMode, setAuthMode, setShowLogin, user } = useContext(AppContext);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(username," ",email,"  ",password);
    const handleClick = () => {
        if (authMode === 'SignUp') {
            setAuthMode('Login');
        } else {
            setAuthMode('SignUp');
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const route = authMode === 'SignUp' ? 'SignUp' : 'login';
        const response = await fetch(`${backend_uri}/user/${route}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                username:username,
                email:email,
                password:password
            })
        });
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            setUser(data.user); 
            setShowLogin(false);
        } else {
            alert(data.error || "Sign Up failed");
            if (authMode === 'SignUp' && data.name === 'UserExistsError') {
                setAuthMode('login');
                toast.error(data.message)
            }
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
        <div className=" fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/10 flex justify-center items-center p-4 ">
            <form action="" className="relative bg-white p-6 sm:p-8 md:p-10 rounded-xl border border-white/20 text-slate-500 w-full max-w-md" onSubmit={handleRegister}>
                <img src={assets.cross_icon} alt="back" className="absolute top-4 right-4 sm:top-6 sm:right-6 cursor-pointer h-3" onClick={() => setShowLogin(false)} />
                <h1 className="text-xl sm:text-2xl text-center text-neutral-700 font-medium">{authMode == 'SignUp' ? 'Sign Up' : 'Login'}</h1>
                <p className="text-xs sm:text-sm text-center text-neutral-500">Please {authMode == 'SignUp' ? 'Sign Up' : 'Login'} to use Imagify</p>
                <div className="border px-4 sm:px-6 py-2 flex item-center gap-2 rounded-full mt-4 sm:mt-5 ">
                    <img src={assets.profile_icon} alt="user" className="w-6 h-6 sm:w-8 sm:h-8" />
                    <input type="text" placeholder="Enter your username" required className="outline-none text-xs sm:text-sm flex-1" value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
                {authMode === 'SignUp' &&
                    <>
                        <div className="border px-4 sm:px-6 py-2 flex item-center gap-2 rounded-full mt-4 sm:mt-5 ">
                            <img src={assets.email_icon} alt="email" className="w-6 h-6 sm:w-8 sm:h-8" />
                            <input type="text" placeholder="Enter your email id" required className="outline-none text-xs sm:text-sm flex-1" value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="border px-4 sm:px-6 py-2 flex item-center gap-2 rounded-full mt-4 sm:mt-5 ">
                            <img src={assets.lock_icon} alt="password" className="w-6 h-6 sm:w-8 sm:h-8" />
                            <input type="password" placeholder="Create password" required className="outline-none text-xs sm:text-sm flex-1" value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        {/* <div className="border px-6 py-2 flex item-center gap-2 rounded-full mt-5 ">
                            <img src={assets.lock_icon} alt="password" className="w-8 h-8" />
                            <input type="text" placeholder="Confirm password" required className="outline-none text-sm" />
                        </div> */}
                    </>
                }
                {authMode === 'Login' &&
                    <div className="border px-4 sm:px-6 py-2 flex item-center gap-2 rounded-full mt-4 sm:mt-5 ">
                        <img src={assets.lock_icon} alt="password" className="w-6 h-6 sm:w-8 sm:h-8" />
                        <input type="password" placeholder="Enter password" required className="outline-none text-xs sm:text-sm flex-1" value={password}
                        onChange={ (e)=> setPassword(e.target.value)}/>
                    </div>
                }
                <button className="bg-blue-500 text-white py-2 rounded-full w-full text-xs sm:text-sm mt-4 sm:mt-5 " >{authMode == 'SignUp' ? 'Sign Up' : 'Login'}</button>
                {authMode === 'Login' &&
                    <>
                        <p className="text-sm text-blue-500 my-2 mx-1 cursor-pointer text-center">Forgot password? </p>
                        <p className="text-sm mt-5 text-center">
                            Don't have an account?
                            <span className="text-blue-500 cursor-pointer" onClick={handleClick}> Sign up</span>
                        </p>
                    </>
                }
                {authMode === 'SignUp' &&
                    <p className="text-sm mt-5 text-center">
                        Already have an account?
                        <span className="text-blue-500 cursor-pointer" onClick={handleClick}> Login</span>
                    </p>
                }
            </form>
        </div >
    );
}
export default Login;