import React from './react.js'

export default function App() {
    return (
        <main>
            <header>
                <h1>My First JSX naive app</h1>
                <p>Hello from JSX</p>
            </header>
            <article className="article-wrapper">
                <section className="example">
                    <h3>There is example of JSX component!</h3>
                    <p>Here is our paragraph</p>
                    <div className="sub-section">
                        <ul>
                            <li>Test our website</li>
                            <li>We have better stack</li>
                            <li>Reach out our best service</li>
                        </ul>
                        <button style={{ padding: 2 + 'rem', border: '2px solid #000', background: 'lightblue' }}>Contact now</button>
                    </div>
                </section>
            </article>
        </main>
    )
}