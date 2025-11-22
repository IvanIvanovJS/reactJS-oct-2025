import { useEffect, useState } from "react"
import GameCard from "../gameCard/GameCard";

export default function Catalog() {
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

                setGames(games)
            } catch (err) {
                if (err.name === "AbortError") return;
                alert(err.message)
            }
        }

        getGames()

        return () => controller.abort();
    }, [])

    return (
        <section id="catalog-page">
            <h1>Catalog</h1>
            {/* <!-- Display div: with information about every game (if any) --> */}

            <div className="catalog-container">

                {games.map(game => <GameCard key={game._id} {...game} />)}

            </div>

            {games.length === 0 && <h3 className="no-articles">No Added Games Yet</h3>}

        </section>
    )
}