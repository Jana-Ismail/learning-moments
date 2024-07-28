import { useEffect, useState } from "react"
import { getAllPosts } from "../../services/postService"
import { Post } from "./Post"
import './Posts.css'

export const AllPosts = () => {
    const [posts, setPosts] = useState([])

    const getAndSetPosts = () => {
        getAllPosts().then((postsArr) => {
            setPosts(postsArr)
        })
    }

    useEffect(() => {
        getAndSetPosts()
    }, [])

    return (
        <div className="posts-container">
            <div className="post-list">
                {posts.map((post) => {
                    return <Post post={post} key={post.id}/>
                })}
            </div>
        </div>
    )
}