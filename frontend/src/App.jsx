import React, { useContext, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import BuyCredit from "./pages/BuyCredit"
import Result from "./pages/Result"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Profile from "./components/Profile"
import { AppContext } from "./context/AppContext"
import { ToastContainer } from 'react-toastify';
import { backend_uri } from "./config"
function App() {
  const { showLogin, user, setUser, showProfile } = useContext(AppContext);
  useEffect(() => {
    fetch(`${backend_uri}/user/checkAuth`,{
      method: 'GET',
      credentials: 'include'
    }).then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.user){
        setUser(data.user);
      }else{
        setUser(null);
      }
    })
  },[]);
  
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-[#e9f2f1] to-[#cfb990]">
      <ToastContainer  position="bottom-right"/>
      <Navbar user={user} />
      {showLogin && <Login setUser={setUser} />}
      {showProfile && <Profile user={user} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyCredit />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  )
}

export default App;