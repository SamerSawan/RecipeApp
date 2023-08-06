import { createContext, useState } from "react";

export const RecipesContext = createContext({
    recipes: [],
    addRecipe: (id) => {},
    removeFavourite: (id) => {}
})

function RecipesContextProvider({children}) {
    const [recipes, setRecipes] = useState([]);

    const addRecipe = (newRecipe) => {
        setRecipes(...recipes, newRecipe)
    }

    const removeRecipe = (recipeToRemove) => {
        setRecipes(recipes.filter((recipe) => recipe.id != recipeToRemove.id))
    }

    const value = {
        recipes: recipes,
        addRecipe: addRecipe,
        removeRecipe: removeRecipe
    }

    return <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>
}

export default RecipesContextProvider;