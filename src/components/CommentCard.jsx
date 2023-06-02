import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchCommentByReviewID } from "../utils/api";

const CommentCard = () => {
    const { comment_id } = useParams();
    const [currentComment, setCurrentComment] = useState({})

    useEffect(() => {
        fetchCommentByReviewID(review_id).then((data) => {
            setCurrentComment(data.review.comment_id)
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })
    }, [comment_id])
    
    return (
        <>
            <Link to={`/reviews/${review_id}/${comment_id}`}>
                <li className="commentCard">
                    <p>Author: { author}</p>
                    <p>Body: {body}</p>
                    <p>Votes: {votes}</p>

                </li>
            </Link>
        </>
    )
};

export default CommentCard