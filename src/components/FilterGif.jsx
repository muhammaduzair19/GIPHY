import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { contextState } from "../context/context.jsx"

const filters = [
    {
        title: 'GIFs',
        value: 'gifs',
        background: 'bg-gradient-to-tr from-purple-500 via-purple-500 to-purple-500'

    },
    {
        title: 'Stickers',
        value: 'stickers',
        background: 'bg-gradient-to-tr from-teal-500 via-teal-500 to-teal-500'

    },
    {
        title: 'Text',
        value: 'text',
        background: 'bg-gradient-to-tr from-blue-500 via-blue-500 to-blue-500'
    }
]



const FilterGif = ({ alignLeft = false, showTrending = false }) => {

    const { filter, setFilter } = contextState();

    return (
        <div className={`flex my-3 gap-3 ${!alignLeft ? 'justify-end' : ''} ${showTrending ? 'justify-between flex-col sm:flex-row sm:items-center' : ''} `}>
            {showTrending && (
                <span className="flex gap-2 items-center">
                    {showTrending && (
                        <HiMiniArrowTrendingUp size={25} className="text-teal-400" />
                    )}
                    <span className="font-semibold text-gray-400">
                        Trending
                    </span>

                </span>
            )}

            <div className="min-w-80 bg-gray-800 rounded-full flex" >
                {
                    filters.map((f) => {
                        return <span 
                        onClick={() => setFilter(f.value)}
                        key={f.value}
                        className={` ${filter === f.value ? f.background : ''} font-semibold py-2 w-1/3 text-center rounded-full cursor-pointer`}>{f.title}</span>
                    })
                }
            </div>

        </div>
    )
}

export default FilterGif