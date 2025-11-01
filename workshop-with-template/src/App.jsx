import Blog from "./components/Blog"
import Contacts from "./components/Contacts"
import Counter from "./components/Counter"
import Footer from "./components/Footer"
import BigFuturesDown from "./components/futures/BigFuturesDown"
import BigFutures from "./components/futures/BigFutures"
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
            <BigFutures
                title='Let’s discuss about you project'
                imageUrl='assets/images/left-image.png'
                content='Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue
                                blandit, at finibus leo efficitur. Nam gravida purus non sapien
                                auctor, ut aliquam magna ullamcorper.'
            />
            <BigFutures
                title='We can help you to grow your business'
                imageUrl='assets/images/right-image.png'
                content='Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis
                                nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor
                                luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis
                                dolor elit.'
                isReversed
            />
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
