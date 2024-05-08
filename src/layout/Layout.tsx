import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="text-white bg-gray-950 w-full min-h-screen">
            {/* header  */}

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout