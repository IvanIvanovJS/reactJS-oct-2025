import SmallFuturesItems from "./partials/SmallFuturesItems";

export default function SmallFutures() {
    return (
        <section className="section home-feature">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">

                            <SmallFuturesItems
                                title={'Modern Strategy'}
                                content={'Customize anything in this template to fit your website needs'} />

                            <SmallFuturesItems
                                title={'Best Relationship'}
                                content={'Contact us immediately if you have a question in mind'} />

                            <SmallFuturesItems
                                title={'Ultimate Marketing'}
                                content={'You just need to tell your friends about our free templates'} />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
