import { useEffect, useState } from 'react'
import './Posts.css'

export const Post = ( {post} ) => {
    const [likes, setLikes] = useState(0)

    useEffect(() => {
        const postLikeCount = post.postLikes?.length
        setLikes(postLikeCount)
    }, [likes])

    return (
        <div className="post-list-group">
            
                <div className="post-list-group-top">
                    <div className="post-list-item-topic">Topic | {post.topic.name}</div>
                    <div className="post-likes">
                        <i className="fa-solid fa-thumbs-up" />
                        <p className="like-count">{likes}</p>
                    </div>
                </div>
            
            <div className="post-list-item-title">"{post.title}"</div>
        </div>
    )
}