import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

const initialValues = {
    title: '',
    genre: '',
    players: '',
    date: '',
    imageUrl: '',
    summary: ''
}

export default function EditGame() {

    const { gameId } = useParams();
    const [values, setValues] = useState(initialValues);
    const navigate = useNavigate();

    useEffect(() => {
        const controller = new AbortController()

        async function getGameById() {
            try {
                const res = await fetch(`http://localhost:3030/jsonstore/games/${gameId}`,
                    { signal: controller.signal }
                )

                const data = await res.json()


                setValues(data)
            } catch (err) {
                alert(err.message)
            }
        }
        getGameById()

        return () => controller.abort()
    }, [gameId])



    const onSubmit = async (e) => {
        e.preventDefault()


        try {
            await fetch(`http://localhost:3030/jsonstore/games/${gameId}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(values),

            })
        } catch (error) {
            return alert(error.message)
        }
        navigate(`/games`)
    }




    const onChangeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <section id="edit-page">
            <form id="add-new-game" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Edit Game</h1>

                    <div className="form-group-half">
                        <label htmlFor="gameName">Game Name:</label>
                        <input
                            type="text"
                            id="gameName"
                            name="title"
                            onChange={onChangeHandler}
                            value={values.title}
                            placeholder="Enter game title..." />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="genre">Genre:</label>
                        <input
                            type="text"
                            id="genre"
                            name="genre"
                            onChange={onChangeHandler}
                            value={values.genre}
                            placeholder="Enter game genre..." />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="activePlayers">Active Players:</label>
                        <input
                            type="number"
                            id="activePlayers"
                            name="players"
                            min="0"
                            onChange={onChangeHandler}
                            value={values.players}
                            placeholder="0" />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="releaseDate">Release Date:</label>
                        <input
                            type="date"
                            id="releaseDate"
                            onChange={onChangeHandler}
                            value={values.date}
                            name="date" />
                    </div>

                    <div className="form-group-full">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            onChange={onChangeHandler}
                            value={values.imageUrl}
                            placeholder="Enter image URL..." />
                    </div>

                    <div className="form-group-full">
                        <label htmlFor="summary">Summary:</label>
                        <textarea name="summary"
                            id="summary"
                            rows="5"
                            onChange={onChangeHandler}
                            value={values.summary}
                            placeholder="Write a brief summary..."></textarea>
                    </div>

                    <input className="btn submit" type="submit" value="EDIT GAME" />
                </div>
            </form>
        </section>
    )
}