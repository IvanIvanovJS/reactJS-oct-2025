import { Route, Routes } from "react-router"
import Footer from "./components/layout/footer/Footer"
import Header from "./components/layout/header/Header"
import Hero from "./components/home/Hero"
import Catalog from "./components/catalog/Catalog"
import Details from "./components/catalog/details/Details"


function App() {



  return (
    <>

      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/games" element={<Catalog />} />
        <Route path="/games/:gameId/details" element={<Details />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
