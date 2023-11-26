import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Wallet from "./pages/Wallet"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/wallet" element={<Wallet/>} />
      </Routes>
    </>
  )
}

export default App
