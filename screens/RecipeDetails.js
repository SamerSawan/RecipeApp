import { View, Text, FlatList } from "react-native";
import IconButton from "../components/Util/IconButton";
import { INGREDIENTS } from "../data/dummy-data";
import Title from "../components/Util/Title";
import RecipeCard from "../components/Home/RecipeCard";
import Button from "../components/Util/Button";
import { FavouritesContext } from "../store/favourites-context";
import { useContext } from "react";

function RecipeDetails({ route, navigation }) {
  const { recipeId } = route.params;

  const favouritesContext = useContext(FavouritesContext);

  const recipeIsFavourite = favouritesContext.ids.includes(recipeId);

  function favouritePressHandler() {
    if (recipeIsFavourite) {
      favouritesContext.removeFavourite(recipeId);
    } else {
      favouritesContext.addFavourite(recipeId);
    }
  }

  function renderIngredientItem({ item }) {
    return (
      <View className="flex-row justify-between self-center items-center bg-primary50 my-2.5 h-12 w-72 rounded-lg">
        <Text className="font-bold text-base mx-2.5">{item.name}</Text>
        <Text className="font-bold text-base mx-2.5">{item.amount}</Text>
      </View>
    );
  }

  function backPressHandler() {
    navigation.goBack();
  }

  return (
    <View className="flex-1 bg-primary100 pt-14 ">
      <View className="ml-10 flex-row justify-between w-80">
        <IconButton
          className="mt-1 top-[10%], left-[10%]"
          name="arrow-back-outline"
          size={30}
          color="#2A7C68"
          onPress={backPressHandler}
        />
        <Title
          className="mt-1"
          textStyle={"text-2xl font-bold text-primary300"}
        >
          Fried Rice
        </Title>
        <IconButton
          name={recipeIsFavourite ? "star" : "star-outline"}
          size={32}
          color={recipeIsFavourite ? "yellow" : "white"}
          onPress={favouritePressHandler}
          className="mt-0.5"
        />
      </View>
      <View className="ml-5">
        <RecipeCard
          height={160}
          width={320}
          cHeight={"h-40"}
          cWidth={"w-80"}
          id={recipeId}
          size={14}
        ></RecipeCard>
      </View>
      <Text className="w-80 h-20 ml-14 mb-6 text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <View className="flex-row px-14 justify-between">
        <View className="bg-primary300 rounded-lg p-4">
          <Button className="text-white text-base font-bold">
            Ingredients
          </Button>
        </View>
        <View className="p-4">
          <Button className="text-primary200 font-bold text-base">
            Procedure
          </Button>
        </View>
      </View>
      <FlatList
        className="p-5"
        data={INGREDIENTS}
        keyExtractor={(item) => item.id}
        renderItem={renderIngredientItem}
      />
    </View>
  );
}

export default RecipeDetails;
