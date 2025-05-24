import React, { useContext } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import BuyCredit from "./pages/BuyCredit"
import Result from "./pages/Result"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Logout from "./components/Logout"
import { AppContext } from "./context/AppContext"
function App() {
  const {showLogin} = useContext(AppContext)
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-[#e9f2f1] to-[#cfb990]">
      <Navbar />
      { showLogin && <Login />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyCredit />} />
        <Route path="/result" element={<Result />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  )
}

export default App
