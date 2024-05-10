import { useEffect, useState } from "react"
import { contextState } from "../context/context";
import { useParams } from "react-router-dom";
import FilterGif from "../components/FilterGif";
import Gif from "../components/Gif";

const Search = () => {
  const { query } = useParams()
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const { gf, filter } = contextState()


  const searchPage = async () => {
    const { data } = await gf.search(query, {
      limit: 20,
      lang: 'en',
      sort: 'relevant',
      type: filter,
    })
    setSearchResults(data)
  }

  useEffect(() => {
    searchPage()
  }, [filter])


  return (
    <div className="my-4">
      <h2 className="text-5xl pb-3 font-extrabold">{query}</h2>
      <FilterGif alignLeft={true} />
      {
        searchResults?.length > 0 ? (
          <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 mt-5">
            {
              searchResults.map((gif: {}) => (
                <Gif gif={gif} key={gif.title} />
              ))
            }
          </div>
        )
          :
          <span>
            No GIFs found for {query}. Try searching for stickers
          </span>
      }
    </div>
  )
}

export default Search