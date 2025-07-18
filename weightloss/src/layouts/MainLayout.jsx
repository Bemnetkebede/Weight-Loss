// src/components/Layout.jsx
import { Outlet } from "react-router-dom"
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"

export default function Layout() {
return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
        <Outlet />
        </main>
        <Footer />
    </div>
)
}
