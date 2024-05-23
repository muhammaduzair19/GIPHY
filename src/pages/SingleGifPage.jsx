import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { contextState } from '../context/context';
import { HiMiniChevronDown, HiMiniChevronUp, HiMiniHeart } from 'react-icons/hi2';
import { FaPaperPlane } from 'react-icons/fa6';
import { IoCodeSharp } from 'react-icons/io5';
import { HiOutlineExternalLink } from 'react-icons/hi';

import Gif from '../components/Gif';
import FollowOn from '../components/FollowOn';

const SingleGifPage = () => {
    const gifType = ['gifs', 'stickers', 'texts']
    const { type, slug } = useParams()
    console.log(slug);

    const [gif, setGif] = useState()
    const [embed, setEmbed] = useState(false)
    const [share, setShare] = useState(false)
    const [readMore, setReadMore] = useState('false')
    const [relatedGifs, setRelatedGifs] = useState()
    const { gf, addToFavorites, favorites } = contextState()

    const shareGif = () => {
        setShare(!share)
        setEmbed(false)
    }
    const embedGif = () => {
        setEmbed(!embed)
        setShare(false)
    }

    const searchGIFs = async () => {
        try {
            const gifId = slug?.split('-');
            const gifIdLast = gifId?.[gifId.length - 1];

            if (gifIdLast) {
                const { data } = await gf.gif(gifIdLast);
                const { data: related } = await gf.related(gifIdLast, {
                    limit: 10
                });

                setGif(data);
                setRelatedGifs(related);
            }
        } catch (error) {
            console.error('Error fetching GIFs:', error);
        }
    }

    useEffect(() => {
        if (!gifType.includes('gifs')) {
            throw new Error('Invalid Type')
        }

        searchGIFs();

    }, [])
    return (
        <div className="grid grid-cols-4 my-10 gap-4">
            <div className="hidden sm:block">
                {
                    gif?.user && (
                        <>
                            <div className='flex gap-1'>
                                <img
                                    src={gif?.user?.avatar_url}
                                    alt={gif?.user?.display_name}
                                    className='h-14'
                                />
                                <div className="px-2">
                                    <div className='font-bold'>{gif?.user?.display_name}</div>
                                    <div className='faded-text'>@{gif?.user?.username}</div>
                                </div>
                            </div>
                            {
                                gif?.user?.description && (
                                    <p className='py-4 whitespace-pre-line text-sm text-gray-400'>
                                        {
                                            readMore ? gif?.user?.description : gif?.user?.description.slice(0, 100) + "..."
                                        }
                                        <div
                                            className='flex items-center faded-text cursor-pointer'
                                            onClick={() => setReadMore(!readMore)}
                                        >
                                            {
                                                !readMore ? (
                                                    <>
                                                        Read less <HiMiniChevronUp size={20} />
                                                    </>
                                                ) : (
                                                    <>
                                                        Read more <HiMiniChevronDown size={20} />

                                                    </>
                                                )
                                            }

                                        </div>
                                    </p>
                                )
                            }

                        </>
                    )
                }
                <FollowOn />

                <div className="divider" />
                {
                    gif?.source && (
                        <div>
                            <span className='faded-text'>Source</span>
                            <div className='flex items-center text-sm font-bold gap-1'>
                                <HiOutlineExternalLink size={30} />
                                <a href={gif?.source} target='_blank' className='truncate'>
                                    {gif?.source}
                                </a>
                            </div>
                        </div>
                    )
                }
            </div>


            <div className="col-span-4 sm:col-span-3">
                <div className="flex gap-6">
                    <div className="w-full sm:w-3/4">
                        <div className="faded-text truncate mb-2">
                            {gif?.title}
                        </div>
                        <Gif gif={gif} hover={false} embed={embed} embedGif={embedGif} shareGif={shareGif} share={share} />

                        {/* mobile ui */}
                        <div className='flex sm:hidden'>
                            <img
                                src={gif?.user?.avatar_url}
                                alt={gif?.user?.display_name}
                                className='h-14'
                            />
                            <div className="px-2">
                                <div className='font-bold'>{gif?.user?.display_name}</div>
                                <div className='faded-text'>@{gif?.user?.username}</div>
                            </div>

                            <button className='ml-auto'
                                onClick={shareGif}
                            >
                                <FaPaperPlane size={25} />
                            </button>
                        </div>
                    </div>



                    <div className="hidden sm:flex flex-col gap-5 mt-6">
                        <button
                            onClick={() => addToFavorites(gif.id)}
                            className='flex gap-5 items-center font-bold text-lg'
                        >
                            <HiMiniHeart
                                size={25}
                                className={
                                    `${favorites.includes(gif?.id) ? 'text-red-500' : ''}`
                                }
                            />
                            Favorites
                        </button>
                        <button className='flex gap-5 items-center font-bold text-lg'
                            onClick={shareGif}
                        >
                            <FaPaperPlane size={25} />
                            Share
                        </button>
                        <button className='flex gap-5 items-center font-bold text-lg'
                            onClick={embedGif}
                        >
                            <IoCodeSharp size={25} />
                            Embed
                        </button>
                    </div>
                </div>
                <div>
                    <span className='font-extrabold'>Related GIFs</span>
                    <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
                        {
                            relatedGifs?.slice(1)?.map((gif) => (
                                <Gif gif={gif} key={gif?.id} />
                            ))
                        }

                    </div>
                </div>
            </div>

        </div>

    )
}

export default SingleGifPage



