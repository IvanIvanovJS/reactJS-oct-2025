import { Route, Routes } from "react-router"
import Hero from "./components/home/Hero"
import Footer from "./components/layout/footer/Footer"
import Header from "./components/layout/header/Header"


function App() {


  return (
    <>

      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
