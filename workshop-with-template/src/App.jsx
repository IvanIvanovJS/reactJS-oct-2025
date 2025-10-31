
function App() {


    return (
        <>
            <main>
                {/* <!-- ***** Preloader Start ***** --> */}
                <div id="js-preloader" className="js-preloader">
                    <div className="preloader-inner">
                        <span className="dot"></span>
                        <div className="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                {/* <!-- ***** Preloader End ***** --> */}

                {/* <!-- ***** Header Area Start ***** --> */}
                <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav className="main-nav">
                                    {/* <!-- ***** Logo Start ***** --> */}
                                    <a href="index.html" className="logo">
                                        <h4>SEO Dream <img src="assets/images/logo-icon.png" alt=""></img></h4>
                                    </a>
                                    {/* <!-- ***** Logo End ***** --> */}
                                    {/* <!-- ***** Menu Start ***** --> */}
                                    <ul className="nav">
                                        <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                                        <li className="scroll-to-section"><a href="#features">Features</a></li>
                                        <li className="scroll-to-section"><a href="#about">About Us</a></li>
                                        <li className="scroll-to-section"><a href="#services">Services</a></li>
                                        <li className="scroll-to-section"><a href="#portfolio">Portfolio</a></li>
                                        <li className="scroll-to-section"><a href="#contact">Contact Us</a></li>
                                        <li className="scroll-to-section"><div className="main-blue-button"><a href="#contact">Get Your Quote</a></div></li>
                                    </ul>
                                    <a className='menu-trigger'>
                                        <span>Menu</span>
                                    </a>
                                    {/* <!-- ***** Menu End ***** --> */}
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                {/* <!-- ***** Header Area End ***** --> */}

                <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-6 align-self-center">
                                        <div className="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                                            <div className="row">
                                                <div className="col-lg-4 col-sm-4">
                                                    <div className="info-stat">
                                                        <h6>Agency Status:</h6>
                                                        <h4>Ready Work</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-sm-4">
                                                    <div className="info-stat">
                                                        <h6>Price:</h6>
                                                        <h4>$720/Month</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-sm-4">
                                                    <div className="info-stat">
                                                        <h6>Schedules</h6>
                                                        <h4>$450/Meeting</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <h2>SEO &amp; Digital Marketing Agency</h2>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="main-green-button scroll-to-section">
                                                        <a href="#contact">Get Your Quote</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                            <img src="assets/images/banner-right-image.png" alt=""></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="features" className="features section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="features-content">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="features-item first-feature wow fadeInUp" data-wow-duration="1s" data-wow-delay="0s">
                                                <div className="first-number number">
                                                    <h6>01</h6>
                                                </div>
                                                <div className="icon"></div>
                                                <h4>Reach Out</h4>
                                                <div className="line-dec"></div>
                                                <p>This HTML5 template is based on Bootstrap 5 CSS. You are free to customize anything.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="features-item second-feature wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                                                <div className="second-number number">
                                                    <h6>02</h6>
                                                </div>
                                                <div className="icon"></div>
                                                <h4>Develop a Strategy</h4>
                                                <div className="line-dec"></div>
                                                <p>Lorem ipsum dolor sit ameter consectetur adipiscing li elit sed do eiusmod.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="features-item first-feature wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
                                                <div className="third-number number">
                                                    <h6>03</h6>
                                                </div>
                                                <div className="icon"></div>
                                                <h4>Implementation</h4>
                                                <div className="line-dec"></div>
                                                <p>If this template is useful for your website, please consider to <a rel="nofollow" href="https://www.paypal.me/templatemo" target="_blank">support us</a> a little.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="features-item second-feature last-features-item wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                                                <div className="fourth-number number">
                                                    <h6>04</h6>
                                                </div>
                                                <div className="icon"></div>
                                                <h4>Analyze the result</h4>
                                                <div className="line-dec"></div>
                                                <p>Below circular progress bar animation supports those CSS values 10, 20, 30, till 100.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="skills-content">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                                                <div className="progress" data-percentage="80">
                                                    <span className="progress-left">
                                                        <span className="progress-bar"></span>
                                                    </span>
                                                    <span className="progress-right">
                                                        <span className="progress-bar"></span>
                                                    </span>
                                                    <div className="progress-value">
                                                        <div>
                                                            80%<br></br>
                                                            <span>HTML/CSS/JS</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                                <div className="progress" data-percentage="60">
                                                    <span className="progress-left">
                                                        <span className="progress-bar"></span>
                                                    </span>
                                                    <span className="progress-right">
                                                        <span className="progress-bar"></span>
                                                    </span>
                                                    <div className="progress-value">
                                                        <div>
                                                            60%<br></br>
                                                            <span>Wordpress</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
                                                <div className="progress" data-percentage="90">
                                                    <span className="progress-left">
                                                        <span className="progress-bar"></span>
                                                    </span>
                                                    <span className="progress-right">
                                                        <span className="progress-bar"></span>
                                                    </span>
                                                    <div className="progress-value">
                                                        <div>
                                                            90%<br></br>
                                                            <span>Marketing</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="skill-item last-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                                                <div className="progress" data-percentage="70">
                                                    <span className="progress-left">
                                                        <span className="progress-bar"></span>
                                                    </span>
                                                    <span className="progress-right">
                                                        <span className="progress-bar"></span>
                                                    </span>
                                                    <div className="progress-value">
                                                        <div>
                                                            70%<br></br>
                                                            <span>Photoshop</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="about" className="about-us section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="left-image wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <img src="assets/images/about-left-image.png" alt=""></img>
                                </div>
                            </div>
                            <div className="col-lg-6 align-self-center wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div className="section-heading">
                                    <h6>About Us</h6>
                                    <h2>Top <em>marketing</em> agency &amp; consult your website <span>with us</span></h2>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-sm-4">
                                        <div className="about-item">
                                            <h4>750+</h4>
                                            <h6>projects finished</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-4">
                                        <div className="about-item">
                                            <h4>340+</h4>
                                            <h6>happy clients</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-4">
                                        <div className="about-item">
                                            <h4>128+</h4>
                                            <h6>awards</h6>
                                        </div>
                                    </div>
                                </div>
                                <p><a rel="nofollow" href="https://templatemo.com/tm-563-seo-dream" target="_parent">SEO Dream</a> is free digital marketing CSS template provided by TemplateMo website. You are allowed to use this template for your business websites. Please DO NOT redistribute this template ZIP file on any Free CSS collection websites. You may contact us for more information. Thank you.</p>
                                <div className="main-green-button"><a href="#">Discover company</a></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="services" className="our-services section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="section-heading wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <h6>Our Services</h6>
                                    <h2>Discover What We Do &amp; <span>Offer</span> To Our <em>Clients</em></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="icon">
                                                <img src="assets/images/service-icon-01.png" alt=""></img>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="right-content">
                                                <h4>Similar Websites</h4>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dormque laudantium.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.4s">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="icon">
                                                <img src="assets/images/service-icon-02.png" alt=""></img>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="right-content">
                                                <h4>Website Trends</h4>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dormque laudantium.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="icon">
                                                <img src="assets/images/service-icon-03.png" alt=""></img>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="right-content">
                                                <h4>Traffic Analysis</h4>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dormque laudantium.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="icon">
                                                <img src="assets/images/service-icon-03.png" alt=""></img>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="right-content">
                                                <h4>Optimizing Keywords</h4>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dormque laudantium.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.7s">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="icon">
                                                <img src="assets/images/service-icon-01.png" alt=""></img>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="right-content">
                                                <h4>Page Optimizations</h4>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dormque laudantium.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.8s">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="icon">
                                                <img src="assets/images/service-icon-02.png" alt=""></img>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="right-content">
                                                <h4>Deep URL Analysis</h4>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dormque laudantium.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="portfolio" className="our-portfolio section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="section-heading wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                                    <h6>Our Portofolio</h6>
                                    <h2>Discover Our Recent <em>Projects</em> And <span>Showcases</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="loop owl-carousel">
                                    <div className="item">
                                        <div className="portfolio-item">
                                            <div className="thumb">
                                                <img src="assets/images/portfolio-01.jpg" alt=""></img>
                                                <div className="hover-content">
                                                    <div className="inner-content">
                                                        <a href="#"><h4>Awesome Project 101</h4></a>
                                                        <span>Marketing</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="portfolio-item">
                                            <div className="thumb">
                                                <img src="assets/images/portfolio-04.jpg" alt=""></img>
                                                <div className="hover-content">
                                                    <div className="inner-content">
                                                        <a href="#"><h4>Awesome Project 102</h4></a>
                                                        <span>Branding</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="portfolio-item">
                                            <div className="thumb">
                                                <img src="assets/images/portfolio-02.jpg" alt=""></img>
                                                <div className="hover-content">
                                                    <div className="inner-content">
                                                        <a href="#"><h4>Awesome Project 103</h4></a>
                                                        <span>Consulting</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="portfolio-item">
                                            <div className="thumb">
                                                <img src="assets/images/portfolio-05.jpg" alt=""></img>
                                                <div className="hover-content">
                                                    <div className="inner-content">
                                                        <a href="#"><h4>Awesome Project 104</h4></a>
                                                        <span>Artwork</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="portfolio-item">
                                            <div className="thumb">
                                                <img src="assets/images/portfolio-03.jpg" alt=""></img>
                                                <div className="hover-content">
                                                    <div className="inner-content">
                                                        <a href="#"><h4>Awesome Project 105</h4></a>
                                                        <span>Branding</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="portfolio-item">
                                            <div className="thumb">
                                                <img src="assets/images/portfolio-06.jpg" alt=""></img>
                                                <div className="hover-content">
                                                    <div className="inner-content">
                                                        <a href="#"><h4>Awesome Project 106</h4></a>
                                                        <span>Artwork</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="portfolio-item">
                                            <div className="thumb">
                                                <img src="assets/images/portfolio-04.jpg" alt=""></img>
                                                <div className="hover-content">
                                                    <div className="inner-content">
                                                        <a href="#"><h4>Awesome Project 107</h4></a>
                                                        <span>Creative</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="portfolio-item">
                                            <div className="thumb">
                                                <img src="assets/images/portfolio-01.jpg" alt=""></img>
                                                <div className="hover-content">
                                                    <div className="inner-content">
                                                        <a href="#"><h4>Awesome Project 108</h4></a>
                                                        <span>Consulting</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="contact" className="contact-us section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s">
                                <form id="contact" action="" method="post">
                                    <div className="row">
                                        <div className="col-lg-6 offset-lg-3">
                                            <div className="section-heading">
                                                <h6>Contact Us</h6>
                                                <h2>Fill Out The Form Below To <span>Get</span> In <em>Touch</em> With Us</h2>
                                            </div>
                                        </div>
                                        <div className="col-lg-9">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <input type="name" name="name" id="name" placeholder="Name" autoComplete="on" required></input>
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <input type="surname" name="surname" id="surname" placeholder="Surname" autoComplete="on" required></input>
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required=""></input>
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-6">
                                                    <fieldset>
                                                        <input type="subject" name="subject" id="subject" placeholder="Subject" autoComplete="on"></input>
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-12">
                                                    <fieldset>
                                                        <textarea name="message" type="text" className="form-control" id="message" placeholder="Message" required=""></textarea>
                                                    </fieldset>
                                                </div>
                                                <div className="col-lg-12">
                                                    <fieldset>
                                                        <button type="submit" id="form-submit" className="main-button ">Send Message Now</button>
                                                    </fieldset>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="contact-info">
                                                <ul>
                                                    <li>
                                                        <div className="icon">
                                                            <img src="assets/images/contact-icon-01.png" alt="email icon"></img>
                                                        </div>
                                                        <a href="#">info@company.com</a>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <img src="assets/images/contact-icon-02.png" alt="phone"></img>
                                                        </div>
                                                        <a href="#">+001-002-0034</a>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <img src="assets/images/contact-icon-03.png" alt="location"></img>
                                                        </div>
                                                        <a href="#">26th Street, Digital Villa</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <p>Copyright © 2021 SEO Dream Co., Ltd. All Rights Reserved.

                                    <br></br>Web Designed by <a rel="nofollow" href="https://templatemo.com" title="free CSS templates">TemplateMo</a></p>
                            </div>
                        </div>
                    </div>
                </footer>

            </main>

        </>
    )
}

export default App
