import { Routes, Route } from "react-router-dom"
import { Home } from "../../pages/Home"
import { User } from "../../pages/User"

import './style.css'

export const Main = () => {
    return (
        <div className="c-main">

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User /> }/>
        </Routes>
        </div>
    )
}