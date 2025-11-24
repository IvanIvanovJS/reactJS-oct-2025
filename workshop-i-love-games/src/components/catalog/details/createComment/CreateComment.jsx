import { useState } from "react"

export default function CreateComment({
    gameId,
    getComments
}) {
    const [commentInfo, setCommentInfo] = useState({
        gameId: gameId,
        comment: '',
    })



    const onSubmitHandler = async () => {

        try {
            await fetch('http://localhost:3030/jsonstore/comments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(commentInfo)
            })
        } catch (error) {
            return alert(error.message)
        }

        setCommentInfo(state => ({
            ...state,
            comment: ''
        }))
        getComments()
    }


    const onChange = (e) => {
        setCommentInfo(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" action={onSubmitHandler}>
                <textarea name="comment" value={commentInfo.comment} onChange={onChange} placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>
    )
}