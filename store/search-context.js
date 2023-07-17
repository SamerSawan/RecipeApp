import { createContext, useState } from "react";

const SearchContext = createContext({
    searchQuery: '',
    searchRecipes: () => {}
});


function SearchContextProvider({children}) {
    const [searchQuery, setSearchQuery] = useState("");

    const searchRecipes = (query) => {
        setSearchQuery(query);
    }


    return <SearchContext.Provider>{children}</SearchContext.Provider>
}

export default SearchContextProvider();