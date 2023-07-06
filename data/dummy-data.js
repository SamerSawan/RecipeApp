import Category from "../models/category";
import Recipe from "../models/recipe";

export const RECIPES = [

    new Recipe(
        'm1',
        'Fried Rice'
    ),

    new Recipe(
        'm2',
        'General Tso'
    ),

    new Recipe(
        'm3',
        'Stir Fry'
    )

]

export const CATEGORIES = [

    new Category(
        'c1',
        'Asian',
    ),
    new Category(
        'c2',
        'Italian',
    ),
    new Category(
        'c3',
        'Mediterranean',
    ),
    new Category(
        'c4',
        'Vegeterian'
    )

]