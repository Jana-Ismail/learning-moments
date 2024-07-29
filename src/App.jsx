import { Route, Routes } from "react-router-dom"
import { AllPosts } from "./components/posts/AllPosts"
import './index.css'
import { ApplicationViews } from "./views/ApplicationViews"
import { Login } from "./components/auth/Login.jsx"
import { Register } from "./components/auth/Register"
import { Authorized } from "./views/Authorized.jsx"

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*" element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  )
}
