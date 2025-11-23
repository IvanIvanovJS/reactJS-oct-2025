import { Route, Routes } from "react-router"
import Footer from "./components/layout/footer/Footer"
import Header from "./components/layout/header/Header"
import Hero from "./components/home/Hero"
import Catalog from "./components/catalog/Catalog"
import Details from "./components/catalog/details/Details"
import Login from "./components/auth/login/Login"
import Register from "./components/auth/register/Register"
import { useState } from "react"
import AddGame from "./components/catalog/addGame/addGame"
import EditGame from "./components/catalog/edit/EditGame"


function App() {
  const [user, setUser] = useState(null)

  const register = (email) => {
    setUser({
      email,
    })
  }

  const logout = () => {
    setUser(null)
  }


  return (
    <>

      <Header user={user} logout={logout} />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/games" element={<Catalog />} />
        <Route path="/games/:gameId/details" element={<Details />} />
        <Route path="/games/:gameId/edit" element={<EditGame />} />
        <Route path="/games/add-game" element={<AddGame />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register user={user} register={register} />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
