import { useState } from "react"
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2"
import { Link } from "react-router-dom"

const Header = () => {

    const [showCategories, setShowCategories] = useState(false)
    const [categories, setCategories] = useState([])

    return (
        <nav>
            <div className="relative flex gap-4 justify-between items-center mb-2">
                <Link to={'/'} className="flex gap-2">
                    <img src="/logo.svg" className="w-8" alt="GIPHY Logo" />
                    <h1 className="text-5xl font-bold tracking-tighter cursor-pointer">GIPHY</h1>
                </Link>
                <div className="flex font-bold text-lg gap-2 items-center">

                    <Link to={'/'} className="px-4 py-1 hover:gradient border-b-4 hidden lg:block">
                        Reaction
                    </Link>
                    <button onClick={() => setShowCategories(!showCategories)}>
                        <HiEllipsisVertical size={35} className={`py-0.5 ${showCategories ? 'gradient' : ''} hover:gradient  border-b-4 hidden lg:block`} />
                    </button>
                    <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
                        <Link to={'/favs'}>
                            Favorite GIFs
                        </Link>
                    </div>
                    <button className="block lg:hidden ">
                        <HiMiniBars3BottomRight size={30} className="text-sky-400" />
                    </button>
                    <div>
                        {
                            showCategories && <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
                                <span>Categories</span>
                                <hr />
                                <div>
                                    <Link className="font-bold">

                                        Reactions
                                    </Link>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Header