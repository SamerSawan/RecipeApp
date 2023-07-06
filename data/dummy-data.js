import Category from "../models/category";
import Recipe from "../models/recipe";
import Ingredient from "../models/ingredient"

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

export const INGREDIENTS = [
    new Ingredient(
        'i1',
        'Rice',
        '200g'
    ),
    new Ingredient(
        'i2',
        'Chicken',
        '150g'
    ),
    new Ingredient(
        'i3',
        'Green Pepper',
        '50g'
    ),
    new Ingredient(
        'i4',
        'Onion',
        '50g'
    )
]