import { Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Explore from "./pages/Explore"
import Home from "./pages/Home"
import Wallet from "./pages/Wallet"


function App() {


  return (
    <>
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
