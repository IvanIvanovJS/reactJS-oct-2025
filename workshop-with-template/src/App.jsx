import Blog from "./components/Blog"
import Contacts from "./components/Contacts"
import Counter from "./components/Counter"
import Footer from "./components/Footer"
import BigFuturesDown from "./components/futures/BigFuturesDown"
import BigFuturesTop from "./components/futures/BigFuturesTop"
import SmallFutures from "./components/futures/SmallFutures"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Preloader from "./components/Loader"
import Parallax from "./components/workProcess/Parallax"
import Pricing from "./components/pricing/Pricing"
import Testimonials from "./components/Testimonials"

function App() {


    return (
        <>
            <Preloader />
            <Header />
            <Hero />
            <SmallFutures />
            <BigFuturesTop />
            <BigFuturesDown />
            <Parallax />
            <Testimonials />
            <Pricing />
            <Counter />
            <Blog />
            <Contacts />
            <Footer />
        </>
    )
}

export default App
