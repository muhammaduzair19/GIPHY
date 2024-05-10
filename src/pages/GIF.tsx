// import { useEffect, useState } from "react"
// import { contextState } from "../context/context"
// import { useParams } from "react-router-dom"
// import Gif from "../components/Gif"


// const GIF = () => {
//   const gifType = ['gifs', 'stickers', 'texts']
//   const { slug } = useParams()
//   const [gif, setGif] = useState()
//   const [relatedGifs, setRelatedGifs] = useState<string[]>()
//   const { gf } = contextState()

//   const searchGIFs = async () => {
//     const gifId = slug?.split('-');
//     const { data } = await gf.gif(gifId[gifId?.length - 1])
//     const { data: related } = await gf.related(gifId[gifId?.length - 1], {
//       limit: 20
//     })

//     setGif(data)
//     setRelatedGifs(related)
//   }

//   useEffect(() => {
//     if (!gifType.includes('gif')) {
//       throw new Error('Invalid Type')
//     }

//     searchGIFs();


//   }, [slug])


//   return (
//     <div className="grid grid-cols-4 my-10 gap-4">
//       <div className="hidden sm:block">
//         siderbar
//       </div>
//       <div className="col-span-4 sm:col-span-3">
//         <div className="flex gap-6">
//           <div className="w-full sm:w-3/4">
//             <div className="faded-text truncate mb-2">
//               {gif?.title}
//             </div>
//             <Gif gif={gif} hover={false} />
//           </div>
//           sjkdi
//         </div>
//       </div>
//     </div>
//   )
// }

// export default GIF


const GIF = () => {
  return (
    <div>GIF</div>
  )
}

export default GIF