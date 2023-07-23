import { createContext, useState } from "react";

export const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (idToRemove) => {}
})


function FavouritesContextProvider({children}) {
    const [favourites, setFavourites] = useState([]);

    const addFavourite = (id) => {
        setFavourites([...favourites, id])
    }

    const removeFavourite = (idToRemove) => {
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