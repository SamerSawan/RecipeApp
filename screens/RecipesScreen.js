import { View, FlatList } from "react-native";
import SearchBar from "../components/Search/SearchBar";
import Button from "../components/Util/IconButton";
import CategoryCarousel from "../components/Search/CategoryCarousel";
import RecipeCard from "../components/Home/RecipeCard";

import { RECIPES } from "../data/dummy-data";

function RecipesScreen({ navigation }) {
  function renderRecipeItem({ item }) {
    function pressHandler() {
      navigation.navigate("Recipe Details", {
        recipeId: item.id,
      });
    }

    return (
      <RecipeCard
        height={160}
        width={320}
        cHeight={'h-40'}
        cWidth={'w-80'}
        size={14}
        pressHandler={pressHandler}
      >
        {item.title}
      </RecipeCard>
    );
  }

  return (
    <>
      <View className='flex-1 flex-column justify-start align-center bg-primary100'>
        <View className='h-[20%] flex-row'>
          <SearchBar />
          <Button className='mt-24 mr-10 bg-primary300 h-10 w-12 items-center justify-center rounded-lg' name="filter" size={24} color="white" />
        </View>
        <CategoryCarousel />
        <FlatList
          className='mt-4 ml-3.5'
          data={RECIPES}
          keyExtractor={(item) => item.id}
          renderItem={renderRecipeItem}
        />
      </View>
    </>
  );
}

export default RecipesScreen;
