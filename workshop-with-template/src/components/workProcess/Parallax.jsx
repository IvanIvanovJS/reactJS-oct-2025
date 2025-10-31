import ParallaxItem from "./ParallaxItem"

export default function Parallax() {

    const parallaxItems = [
        { title: 'Get Ideas', content: 'Godard pabst prism fam cliche.' },
        { title: 'Skech Up', content: 'Godard pabst prism fam cliche.' },
        { title: 'Discuss', content: 'Godard pabst prism fam cliche.' },
        { title: 'Revise', content: 'Godard pabst prism fam cliche.' },
        { title: 'Approve', content: 'Godard pabst prism fam cliche.' },
        { title: 'Launch', content: 'Godard pabst prism fam cliche.' }
    ]

    return (
        <section className="mini" id="work-process">
            <div className="mini-content">
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-3 col-lg-6">
                            <div className="info">
                                <h1>Work Process</h1>
                                <p>
                                    Aenean nec tempor metus. Maecenas ligula dolor, commodo in
                                    imperdiet interdum, vehicula ut ex. Donec ante diam.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* ***** Mini Box Start ***** */}
                    <div className="row">
                        {parallaxItems.map(item => {
                            return <ParallaxItem key={item.title} title={item.title} content={item.content} />
                        })}
                    </div>
                    {/* ***** Mini Box End ***** */}
                </div>
            </div>
        </section>
    )
}