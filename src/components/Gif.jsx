import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import { BiCross } from "react-icons/bi"
import { Link } from "react-router-dom"

const Gif = ({ gif, hover = true, embed = false, share = false, embedGif = () => { }, shareGif = () => { } }) => {
    const [responsive, setResponsive] = useState(false)
    const [copy, setCopy] = useState(false)
    useEffect(() => {
        console.log(gif);
    }, [])

    const changeResponsive = () => {
        setResponsive(!responsive)
        setCopy(false)
    }
    return (
        <Link className="relative" to={`/${gif?.type}s/${gif?.slug}`}>
            {
                embed && (
                    <div className="w-full h-full bg-zinc-950 opacity-70 absolute z-20">
                        <div className="flex flex-col px-10 py-5 gap-6 z-50 opacity-100">
                            <span className="flex justify-between border-b pb-5">
                                <span className="font-extrabold text-lg">Embed GIF</span>
                                <span onClick={embedGif} className="font-extrabold">X</span>
                            </span>

                            <p>
                                Want to embed this GIF on your website or blog?
                                <br />
                                Just drop in the embed code below and you're done!
                            </p>

                            <div>
                                <h1 className="font-extrabold text-xl tracking-tighter">Responsive GIFs</h1>
                                <div
                                    onClick={() => setResponsive(!responsive)}
                                    className={`w-32 bg-black opacity-100 rounded-full overflow-hidden flex ${responsive ? 'justify-start' : 'justify-end'} transition-all delay-700 duration-1000`}>
                                    <button className={` w-1/2 gradient rounded-full text-white font-bold`} onClick={changeResponsive}>{responsive ? 'ON' : 'OFF'}</button>
                                </div>
                            </div>

                            <span className="flex flex-col gap-4">
                                <span className="font-bold text-md">Embed Code</span>
                                <label className="w-full flex">
                                    {
                                        responsive ? (
                                            <>
                                                <input value={`<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src=${gif.embed_url} width="100%" height="100%" style="position:absolute" frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div><p><a href=${gif.url}>via GIPHY</a></p>`}
                                                    className="w-full py-2 px-2 outline-none text-black" type="text" />
                                                <CopyToClipboard
                                                    text={`<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src=${gif.embed_url} width="100%" height="100%" style="position:absolute" frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div><p><a href=${gif.url}>via GIPHY</a></p>`}
                                                    onCopy={() => setCopy(true)}>
                                                    <button className="gradient px-10">{copy ? 'Copied!' : 'COPY'}</button>
                                                </CopyToClipboard>
                                            </>
                                        ) : (
                                            <>
                                                <input value={`<iframe src=${gif.embed_url} width="100%" height="100 style="position:absolute" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href=${gif.url}>via GIPHY</a></p>`}
                                                    className="w-full py-2 px-2 outline-none text-black" type="text" />
                                                <CopyToClipboard
                                                    text={`<iframe src=${gif.embed_url} width="100%" height="100%" style="position:absolute" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href=${gif.url}>via GIPHY</a></p>`}
                                                    onCopy={() => setCopy(true)}>
                                                    <button className="gradient px-10">{copy ? 'Copied!' : 'COPY'}</button>
                                                </CopyToClipboard>
                                            </>
                                        )
                                    }
                                </label>
                            </span>
                        </div>
                    </div>
                )
            }
            {
                share && (
                    <div className="w-full h-full bg-zinc-950 opacity-70 absolute z-50">

                    </div>
                )
            }
            <div className="w-full mb-2 relative cursor-pointer group aspect-video">
                <img
                    src={gif?.images?.fixed_width?.webp}
                    alt={gif?.title}
                    className="w-full object-cover rounded transition-all duration-300"
                />
                {
                    hover && (<div className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 flex items-end gap-2 p-2 bg-gradient-to-b from-transparent via-transparent to-black font-bold" >
                        <img src={gif?.user?.avatar_url} alt={gif?.user?.display_name} className="h-8" />
                        <span>{gif?.user?.display_name}</span>
                    </div>)
                }

                {/* <div style="width:100%;height:0;padding-bottom:100%;position:relative;">
                    <iframe
                        src="https://giphy.com/embed/hkE6wynetELGa7xOjq"
                        width="100%" height="100%" style="position:absolute"
                        frameBorder="0"
                        className="giphy-embed"
                        allowFullScreen>
                    </iframe>
                </div>
                <p>
                    <a href="https://giphy.com/gifs/happybirthday-bday-hbday-hkE6wynetELGa7xOjq">via GIPHY</a>
                </p> */}



            </div>
        </Link >
    )
}

export default Gif









