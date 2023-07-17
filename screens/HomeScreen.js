import { StyleSheet, View, FlatList } from "react-native";
import HeroText from "../components/Home/HeroText";
import Title from "../components/Util/Title";
import RecipeCard from "../components/Home/RecipeCard";

import { RECIPES } from "../data/dummy-data";

function HomeScreen({ navigation }) {
  function renderRecipeItem({ item }) {
    function pressHandler() {
      navigation.navigate("Recipe Details", {
        recipeId: item.id,
      });
    }

    return (
      <RecipeCard
        height={160}
        width={160}
        cHeight={'h-40'}
        cWidth={'w-40'}
        size="text-xs"
        iconSize={12}
        pressHandler={pressHandler}
      >
        {item.title}
      </RecipeCard>
    );
  }

  return (
    <View className="flex-1 bg-primary100">
      <HeroText />
      <Title className="mt-14 pl-5" textStyle={'font-bold text-sm'}>
        Recently Viewed Recipes
      </Title>
      <FlatList
        className='flex-1 max-h-[30%]'
        data={RECIPES}
        keyExtractor={(item) => item.id}
        renderItem={renderRecipeItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <Title className="pl-5" textStyle={'font-bold text-sm'}>
        Favourite Recipes
      </Title>
      <FlatList
        className='flex-1 max-h-[30%]'
        data={RECIPES}
        keyExtractor={(item) => item.id}
        renderItem={renderRecipeItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default HomeScreen;
