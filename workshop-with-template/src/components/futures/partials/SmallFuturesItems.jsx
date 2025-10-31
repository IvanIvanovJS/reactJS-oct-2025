export default function SmallFuturesItems({ title, content }) {
    return (
        <div
            className="col-lg-4 col-md-6 col-sm-6 col-12"
            data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
        >
            <div className="features-small-item">
                <div className="icon">
                    <i>
                        <img src="assets/images/featured-item-01.png" alt="" />
                    </i>
                </div>
                <h5 className="features-title">{title}</h5>
                <p>
                    {content}
                </p>
            </div>
        </div>
    )
}