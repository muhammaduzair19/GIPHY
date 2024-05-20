import { GiphyFetch } from "@giphy/js-fetch-api";
import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

interface GifProviderProps {
    children: ReactNode;
}

const gifContext = createContext();

const GifProvider: React.FC<GifProviderProps> = ({ children }) => {
    const [gifs, setGifs] = useState<{}[]>([])
    const [filter, setFilter] = useState<string>('gifs')
    const [favorites, setFavorites] = useState<string[]>([])

    const addToFavorites = (id) => {
        if (favorites.includes(id)) {
            const updated = favorites.filter((itemId) => itemId !== id)
            localStorage.setItem('favoriteGIFs', JSON.stringify(updated))
            setFavorites(updated)
        }
        else {
            const updated = [...favorites]
            updated.push(id)
            localStorage.setItem('favoriteGIFs', JSON.stringify(updated))
            setFavorites(updated)
        }
    }


    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favoriteGIFs')) || []

        setFavorites(favorites)
    }, [])

    const gf = new GiphyFetch('REuoPzfcP7N5PN2ZJk8Ik7ppe3dTKYRW');

    return (
        <gifContext.Provider value={{ gf, gifs, setGifs, favorites, filter, setFilter, addToFavorites }}>
            {children}
        </gifContext.Provider>
    );
}


export const contextState = () => {
    return useContext(gifContext)
}

export default GifProvider
