import { useParams } from "react-router-dom"
import { contextState } from "../context/context"
import { useEffect, useState } from "react"
import Gif from "../components/Gif"
import FollowOn from "../components/FollowOn"

const Category = () => {
  const [results, setResults] = useState<string[]>([])
  const { category } = useParams()
  const { gf } = contextState()

  const searchPage = async () => {
    const { data } = await gf.gifs(category, category)
    setResults(data)
  }

  useEffect(() => {
    searchPage()
  }, [category])

  return (
    <div className="flex flex-col sm:flex-row gap-5 mt-4 mb-4">
      <div className="w-full sm:w-72">
        {results?.length > 0 && <Gif gif={results[0]} hover={false} />}
        <span className="pt-2 font-semibold text-gray-500 text-sm">
          Don't tell it to me, GIF it to me!
        </span>
        <FollowOn />
        <div className="divider" />
      </div>
      <div>
        <h2 className="capitalize text-4xl font-extrabold pb-1">{category?.split('-').join(' & ')} GIFs</h2>
        <h2 className="text-lg text-gray-400 font-bold hover:text-gray-50 cursor-pointer">
          @{category}
        </h2>
        <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 mt-5">
          {
            results?.slice(1)?.map((gif: {}) => {
              return <Gif gif={gif} key={gif.title} />

            })
          }
        </div>
      </div>
    </div>
  )
}

export default Category