import { useEffect, useState } from "react"
import { getAllPosts } from "../../services/postService"
import { Post } from "./Post"
import './Posts.css'
import { PostFilterBar } from "./PostFilterBar"

            // <select>
            //     <option value="0">Select a topic</option>
            //     <option value="1">Variables</option>
            //     <option value="2">Functions</option>
            //     <option value="3">Loops</option>
            //     <option value="4">Arrays</option>
            //     <option value="5">Objects</option>
            //     <option value="6">Asynchronous Programming</option>
            //     <option value="7">DOM Manipulation</option>
            // </select>

export const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedOption, setSelectedOption] = useState(0)

    const getAndSetPosts = () => {
        getAllPosts().then((postsArr) => {
            setAllPosts(postsArr)
        })
    }

    useEffect(() => {
        getAndSetPosts()
    }, [])

    useEffect(() => {
        if (searchTerm) {
            const foundPosts = allPosts.filter(post => post.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
            setFilteredPosts(foundPosts)
        } else {
            setFilteredPosts(allPosts)
        }
    }, [searchTerm, allPosts])

    useEffect(() => {
        if (selectedOption) {
            const foundPosts = allPosts.filter(post => selectedOption === post.topic.id)
            setFilteredPosts(foundPosts)
        } else {
            setFilteredPosts(allPosts)
        }
    }, [selectedOption, allPosts])


    return (
        <div className="posts-container">
            <PostFilterBar setSearchTerm={setSearchTerm} setSelectedOption={setSelectedOption}/>
            <div className="post-list">
                {filteredPosts.map((post) => {
                    return <Post post={post} key={post.id}/>
                })}
            </div>
        </div>
    )
}