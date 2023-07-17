import { createContext, useState } from "react";

export const SearchContext = createContext({
    searchQuery: '',
    searchRecipes: () => {}
});


function SearchContextProvider({children}) {
    const [searchQuery, setSearchQuery] = useState("");

    const searchRecipes = (query) => {
        setSearchQuery(query);
    }

    const value = {
        searchQuery: searchQuery,
        searchRecipes: searchRecipes,
      };

    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}

export default SearchContextProvider;