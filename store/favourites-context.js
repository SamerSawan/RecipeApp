import { createContext, useState } from "react";

export const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (idToRemove) => {}
})


function FavouritesContextProvider({children}) {
    const [favourites, setFavourites] = useState([]);

    const addFavourite = (id) => {
        console.log('a')
        setFavourites([...favourites, id])
    }

    const removeFavourite = (idToRemove) => {
        console.log('r')
        setFavourites(favourites.filter((id) => id !== idToRemove));
    }

    const value = {
        ids: favourites,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite
    }

    return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>

}

export default FavouritesContextProvider;