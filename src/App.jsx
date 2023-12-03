import { useEffect, useState } from "react"
import { FaRegMoon } from "react-icons/fa"
import { FiSun } from "react-icons/fi"
import { Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Explore from "./pages/Explore"
import Home from "./pages/Home"
import Wallet from "./pages/Wallet"


function App() {
  const [darkMode, setDarkMode] = useState(false);
    const element = document.documentElement;


    useEffect(()=>{
        if(darkMode === true){
            element.classList.add("dark")
        } else{
            element.classList.remove("dark")
        }
    },[darkMode])


  return (
    <>
      <div className='top-[35%] left-1 rounded-full z-50 fixed flex flex-col p-2 space-y-3 text-yellow-500 cursor-pointer bg-black dark:bg-white' onClick={()=> setDarkMode(!darkMode)}>
            <FaRegMoon />
            <FiSun />
            <span className={`h-6 w-6 rounded-full absolute transfrom -translate-x-1 ${darkMode ? "-translate-y-4" : "translate-y-3"} duration-500 bg-white dark:bg-black`}></span>
        </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/wallet" element={<Wallet/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/explore" element={<Explore/>} />
      </Routes>
    </>
  )
}

export default App
