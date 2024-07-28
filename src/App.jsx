import { Route, Routes } from "react-router-dom"
import { AllPosts } from "./components/posts/AllPosts"
import './index.css'

export const App = () => {
  return (
    <div className="app-container">
      <h1>Learning Moments</h1>
      <AllPosts />
    </div>
  )
}
