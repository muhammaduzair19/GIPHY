import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const Layout = () => {
    return (
        <div className="text-white bg-gray-950 w-full min-h-screen">
            <div className="container px-6 py-4 mx-auto">
                <Header />

                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout