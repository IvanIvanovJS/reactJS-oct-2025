export default function PricingItem({
    title,
    price,
    space,
    transfer,
    hasSupport,
    hasUnlimitedEmails,
    hasSecurity,
    isHighlighted

}) {
    return (
        <div
            className="col-lg-4 col-md-6 col-sm-12"
            data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
        >
            <div className={`${isHighlighted ? 'active' : ""} pricing-item`} >
                <div className="pricing-header">
                    <h3 className="pricing-title">{title}</h3>
                </div>
                <div className="pricing-body">
                    <div className={`price-wrapper`}>
                        <span className="currency">$</span>
                        <span className="price">{price}</span>
                        <span className="period">monthly</span>
                    </div>
                    <ul className="list">
                        <li className="active">{space} GB space</li>
                        <li className="active">{transfer} GB transfer</li>
                        <li className="active">Pro Design Panel</li>
                        <li className={hasSupport && 'active'}>15-minute support</li>
                        <li className={hasUnlimitedEmails && 'active'}>Unlimited Emails</li>
                        <li className={hasSecurity && 'active'}>24/7 Security</li>
                    </ul>
                </div>
                <div className="pricing-footer">
                    <a href="#" className="main-button">
                        Purchase Now
                    </a>
                </div>
            </div>
        </div>
    )
}