import { Outlet, Route, Routes } from "react-router-dom"
import { AllPosts } from "../components/posts/AllPosts"
import { NavBar } from "../components/nav/NavBar"
import { useEffect, useState } from "react"

export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const localLearningUser = localStorage.getItem("learning_user")
        const learningUserObj = JSON.parse(localLearningUser)
        setCurrentUser(learningUserObj)
    }, [])

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <NavBar />
                        <h1>Learning Moments</h1>
                        <Outlet />
                    </>
                }
            >
                <Route index element={<AllPosts />} />
            </Route>
        </Routes>
    )
}