import { GiphyFetch } from "@giphy/js-fetch-api";
import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface GifProviderProps {
    children: ReactNode;
}

const gifContext = createContext();

const GifProvider: React.FC<GifProviderProps> = ({ children }) => {
    const [gifs, setGifs] = useState<{}[]>([])
    const [filter, setFilter] = useState<string>('gifs')
    const [favorites, setFavorites] = useState<string[]>([])

    const gf = new GiphyFetch('REuoPzfcP7N5PN2ZJk8Ik7ppe3dTKYRW');

    return (
        <gifContext.Provider value={{ gf, gifs, setGifs, favorites, filter, setFilter }}>
            {children}
        </gifContext.Provider>
    );
}


export const contextState = () => {
    return useContext(gifContext)
}

export default GifProvider
