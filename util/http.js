import axios from "axios";
import { url } from "./config";

function storeRecipe(recipeData) {
    axios.post(url + 'recipes.json', recipeData);
}

export default storeRecipe;