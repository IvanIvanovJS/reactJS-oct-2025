import PricingItem from "./PricingItem";

export default function Pricing() {
    return (

        <section className="section colored" id="pricing-plans">
            <div className="container">
                {/* ***** Section Title Start ***** */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="center-heading">
                            <h2 className="section-title">Pricing Plans</h2>
                        </div>
                    </div>
                    <div className="offset-lg-3 col-lg-6">
                        <div className="center-text">
                            <p>
                                Donec vulputate urna sed rutrum venenatis. Cras consequat magna
                                quis arcu elementum, quis congue risus volutpat.
                            </p>
                        </div>
                    </div>
                </div>
                {/* ***** Section Title End ***** */}
                <div className="row">

                    <PricingItem
                        title={'Starter'}
                        price={(14.50).toFixed(2)}
                        space={60}
                        transfer={600}
                    />
                    <PricingItem
                        title={'Premium'}
                        price={(21.50).toFixed(2)}
                        space={120}
                        transfer={1200}
                        hasSupport
                        isHighlighted
                    />
                    <PricingItem
                        title={'Advanced'}
                        price={(42).toFixed(2)}
                        space={120}
                        transfer={1200}
                        hasSupport
                        hasUnlimitedEmails
                        hasSecurity
                    />
                </div>
            </div>
        </section>
    )
}