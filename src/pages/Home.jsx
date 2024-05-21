import { useEffect } from "react";
import { contextState } from "../context/context";
import Gif from "../components/Gif";
import FilterGif from "../components/FilterGif";

const Home = () => {
  const { gf, gifs, setGifs, filter, } = contextState();

  const trendingGifs = async () => {
    const { data } = await gf.trending({
      type: filter,
      limit: 20,
      rating: 'g'
    });
    setGifs(data)

  }

  useEffect(() => {
    trendingGifs()
  }, [filter])

  return (
    <section>
      <img src="/banner.gif" alt="earth banner" className="mt-2 rounded w-full" />
      <FilterGif showTrending />
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 mt-5">
        {
          gifs.map((gif) => {
            return <Gif gif={gif} key={gif.title} />

          })
        }
      </div>
    </section>

  )
}

export default Home