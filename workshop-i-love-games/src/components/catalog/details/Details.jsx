import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import CreateComment from "./createComment/CreateComment"

export default function Details() {

    const { gameId } = useParams()
    const [game, setGame] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        async function getGameById() {
            const controller = new AbortController()
            try {
                const res = await fetch(`http://localhost:3030/jsonstore/games/${gameId}`,
                    { signal: controller.signal }
                )

                const data = await res.json()

                setGame(data)
            } catch (err) {
                alert(err.message)
            }

            return () => controller.abort()
        }
        getGameById()
    }, [gameId])

    useEffect(() => {
        const controller = new AbortController()


        async function getComments() {
            try {
                const res = await fetch(`http://localhost:3030/jsonstore/comments?where=gameId%3D%22${gameId}%22`, {
                    signal: controller.signal
                })
                const data = await res.json()
                setComments(Object.values(data))

            } catch (error) {
                if (error.name === 'AbortController') return;
                return alert(error.message)
            }
        }

        getComments()


        return () => controller.abort()
    }, [gameId])



    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="header-and-image">
                    <img className="game-img" src={game.imageUrl} alt={game.title} />

                    <div className="meta-info">
                        <h1 className="game-name">{game.title}</h1>

                        <p className="data-row">
                            <span className="label">Genre:</span>
                            <span className="value">{game.genre}</span>
                        </p>

                        <p className="data-row">
                            <span className="label">Active Players:</span>
                            <span className="value">{game.players}</span>
                        </p>

                        <p className="data-row">
                            <span className="label">Release Date:</span>
                            <span className="value">{game.date}</span>
                        </p>
                    </div>
                    <div className="summary-section">
                        <h2>Summary:</h2>
                        <p className="text-summary">
                            {game.summary}
                        </p>
                    </div>
                </div>


                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                <div className="buttons">
                    <Link to={`/games/${gameId}/edit`} className="button">Edit</Link>
                    <a href="#" className="button">Delete</a>
                </div>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(comment => (
                            <li key={comment._id} className="comment">
                                <p>{comment.comment}</p>
                            </li>
                        ))}
                    </ul>
                    {/* <!-- Display paragraph: If there are no games in the database -->
                    <!-- <p className="no-comment">No comments.</p> --> */}
                </div>

            </div>
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}

            <CreateComment gameId={gameId} />

        </section>
    )
}