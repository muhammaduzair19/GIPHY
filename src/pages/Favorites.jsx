import { useEffect, useState } from "react"
import { contextState } from "../context/context.jsx"
import Gif from "../components/Gif";

const Favorites = () => {
  const [favoriteGIFs, setFavoritesGifs] = useState([])

  const { gf, favorites } = contextState();


  const searchFavoritesGIFs = async () => {
    const { data: gifs } = await gf.gifs(favorites)

    setFavoritesGifs(gifs)
  }


  useEffect(() => {
    searchFavoritesGIFs();
  }, [])


  return (
    <div className="mt-2">
      <span className="faded-text">My Favorites</span>
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2 mt-2">
        {
          favoriteGIFs?.map((gif) => (
            <Gif gif={gif} key={gif.id} />
          ))
        }
      </div>
    </div>
  )
}

export default Favorites