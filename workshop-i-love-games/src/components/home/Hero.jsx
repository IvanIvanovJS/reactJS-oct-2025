import { useEffect, useState } from "react";
import GameCard from "../gameCard/GameCard";

export default function Hero() {
    const [games, setGames] = useState([]);
    useEffect(() => {
        const controller = new AbortController()

        async function getGames() {
            try {
                const res = await fetch('http://localhost:3030/jsonstore/games',
                    { signal: controller.signal }
                )
                const data = await res.json();


                const arrayData = Object.entries(data)
                const games = arrayData.map(([id, game]) => ({
                    _id: id,
                    ...game
                }))

                const sortedGames = games.sort((a, b) => b._createdOn - a._createdOn).slice(0, 3)

                setGames(sortedGames)
            } catch (err) {
                if (err.name === "AbortError") return; // игнорирай
                alert(err.message)
            }

        }
        getGames()

        return () => controller.abort();
    }, [])

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in </h3>
                <img id="logo-left" src="/images/logo.png" alt="logo" />
            </div>

            <div id="home-page">
                <h1>Latest Games</h1>
                <div id="latest-wrap">
                    {/* <!-- Display div: with information about every game (if any) --> */}
                    <div className="home-container">
                        {games.map(game => <GameCard key={game._id} {...game} />)}

                        {games.length === 0 && <p className="no-articles">No games yet</p>}

                    </div>
                </div>
            </div>
        </section>
    )
}