import { Route, Routes } from "react-router"
import Footer from "./components/layout/footer/Footer"
import Header from "./components/layout/header/Header"
import Hero from "./components/home/Hero"
import Catalog from "./components/catalog/Catalog"
import Details from "./components/catalog/details/Details"
import Login from "./components/auth/login/Login"


function App() {



  return (
    <>

      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/games" element={<Catalog />} />
        <Route path="/games/:gameId/details" element={<Details />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
