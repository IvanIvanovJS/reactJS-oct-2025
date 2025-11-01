export default function BigFutures({
    title,
    imageUrl,
    content,
    isReversed }
) {
    return (
        <section className="section padding-top-70">
            <div className="container">
                <div className="row" style={isReversed ? { display: "flex", flexDirection: 'row-reverse' } : {}}>
                    <div
                        className="col-lg-5 col-md-12 col-sm-12 align-self-center"
                        data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
                    >
                        <img
                            src={imageUrl}
                            className="rounded img-fluid d-block mx-auto"
                            alt="App"
                        />
                    </div>
                    <div className="col-lg-1" />
                    <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                        <div className="left-heading">
                            <h2 className="section-title">{title}</h2>
                        </div>
                        <div className="left-text">
                            <p>
                                {content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}