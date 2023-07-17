import { View, Text, StyleSheet, FlatList } from "react-native";
import IconButton from "../components/Util/IconButton";
import { RECIPES } from "../data/dummy-data";
import { INGREDIENTS } from "../data/dummy-data";
import Title from "../components/Util/Title";
import RecipeCard from "../components/Home/RecipeCard";
import Button from "../components/Util/Button";
import { GlobalStyles } from "../constants/styles";

function RecipeDetails({ navigation }) {

  function renderIngredientItem({ item }) {
    return (
      <View style={styles.ingredientContainer}>
        <Text style={styles.ingredientText}>{item.name}</Text>
        <Text style={styles.ingredientText}>{item.amount}</Text>
      </View>
    );
  }

  function pressHandler() {
    navigation.goBack();
    console.log("going back");
  }

  return (
    <View className='flex-1 bg-primary100 pt-14'>
      <View className='flex-row justify-center'>
        <IconButton
          className='absolute top-[8%], left-[10%]'
          name="arrow-back-outline"
          size={30}
          color="#2A7C68"
          onPress={pressHandler}
        />
        <Title className='mt-1' textStyle={'text-2xl font-bold text-primary300'}>
          Fried Rice
        </Title>
      </View>
      <View className='ml-5'>
        <RecipeCard height={160} width={320} cHeight={'h-40'} cWidth={'w-80'} size={14}></RecipeCard>
      </View>
      <Text className='w-80 h-20 ml-14 mb-6 text-base'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <View className="flex-row px-14 justify-between">
        <View className="bg-primary300 rounded-lg p-4">
          <Button className="text-white text-base font-bold">Ingredients</Button>
        </View>
        <View className="p-4">
          <Button className="text-primary200 font-bold text-base">Procedure</Button>
        </View>
      </View>
      <FlatList
        className='p-5'
        data={INGREDIENTS}
        keyExtractor={(item) => item.id}
        renderItem={renderIngredientItem}
      />
    </View>
  );
}

export default RecipeDetails;

const styles = StyleSheet.create({
  ingredientContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: GlobalStyles.colors.primary50,
    marginVertical: 10,
    height: 50,
    width: 270,
    borderRadius: 10,
  },
  ingredientText: {
    fontWeight: "bold",
    fontSize: 16,
    marginHorizontal: 10,
  },
});
