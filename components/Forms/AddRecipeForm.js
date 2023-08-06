import { useState } from "react";
import { View, Image, Pressable, FlatList, ScrollView, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Input from "./Input";
import ListInput from "./ListInput";
import Button from "../Util/Button";
import Ingredient from "../../models/ingredient";
import { useContext } from "react";
import { RecipesContext } from "../../store/recipes-context";
import Recipe from "../../models/recipe";

function AddRecipeForm({navigation}) {
  const recipesContext = useContext(RecipesContext);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [instructions, setInstructions] = useState([]);
  const [instruction, setInstruction] = useState("");

  function cancelPressHandler() {
    navigation.goBack();
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  function nameChangeHandler(enteredText) {
    setName(enteredText);
  }

  function descChangeHandler(enteredText) {
    setDesc(enteredText);
  }

  function ingredientChangeHandler(enteredText) {
    setIngredient(enteredText);
  }

  function quantityChangeHandler(enteredText) {
    setQuantity(enteredText);
  }

  function instructionChangeHandler(enteredText) {
    setInstruction(enteredText);
  }

  function addIngredient() {
    let ingr = new Ingredient(
      Math.floor(Math.random() * 100),
      ingredient,
      quantity
    );
    setIngredient("");
    setQuantity("");
    setIngredients((prevIngredients) => [...prevIngredients, ingr]);
  }

  function addInstruction() {
    setInstructions((prevInstructions) => [...prevInstructions, instruction]);
    setInstruction("");
  }

  function submitHandler() {
    let curr = new Recipe(name, name);
    recipesContext.addRecipe(curr);
    console.log(recipesContext.recipes);
    navigation.goBack();
  }

  function renderIngredientItem({ item }) {
    return (
      <View className="flex-row justify-between bg-primary50 rounded-lg py-1 px-2 w-24 pt-1 align-center">
        <Text className="text-primary200">{item.name}</Text>
        <Text className="text-primary200">{item.amount}</Text>
      </View>
    );
  }

  function renderInstructionItem({ item, index }) {
    return (
      <View className="flex-row justify-between w-48 pt-1 bg-primary50 rounded-lg align-center">
        <Text className="text-primary200">{`${index + 1}. ${item}`}</Text>
      </View>
    );
  }

  return (
    <View className="items-center">
      <View className="flex-auto border-2">
        <View className="flex-row pt-2 mt-10 mb-5 w-96">
          <View>
            <Input
              label="Name"
              placeholder={"Recipe Name"}
              onChangeText={nameChangeHandler}
              value={name}
              style="w-40"
            />
            <View className="mb-10 items-center">
              <View className="w-36">
                {image ? (
                  <Pressable className="items-center mt-2" onPress={pickImage}>
                    <Image
                      className="rounded-lg"
                      source={{ uri: image }}
                      style={{ width: 100, height: 100 }}
                    />
                  </Pressable>
                ) : (
                  <View className="mt-2">
                    <Button onPress={pickImage}>Pick Image</Button>
                  </View>
                )}
              </View>
            </View>
          </View>
          <View className="">
            <Input
              label="Description"
              placeholder={"Description"}
              onChangeText={descChangeHandler}
              value={desc}
              style="w-64 h-32"
            />
          </View>
        </View>
        <View>
          <View className="pt-2 items-center">
            <ListInput
              label="Ingredients"
              placeholder="Ingredient Name"
              onChangeText={ingredientChangeHandler}
              value={ingredient}
              quantityOnChangeText={quantityChangeHandler}
              quantity={quantity}
              isIngredient={true}
              onPress={addIngredient}
              buttonTitle="add ingredient"
            />
            {ingredients.length > 0 && (
              <ScrollView horizontal className="w-32 p-2">
                <FlatList
                  data={ingredients}
                  keyExtractor={(item) => item.id.toString()}
                  ItemSeparatorComponent={() => <View className="h-2"></View>}
                  renderItem={renderIngredientItem}
                />
              </ScrollView>
            )}
          </View>
          <View className="mt-4 items-center">
            <ListInput
              label="Instructions"
              placeholder="Instruction"
              onChangeText={instructionChangeHandler}
              value={instruction}
              onPress={addInstruction}
              buttonTitle="add instruction"
            />
            {instructions.length > 0 && (
              <ScrollView horizontal className="w-52 p-2">
                <FlatList
                  data={instructions}
                  keyExtractor={(item) => item}
                  ItemSeparatorComponent={() => <View className="h-2"></View>}
                  renderItem={renderInstructionItem}
                />
              </ScrollView>
            )}
          </View>
        </View>
      </View>
      <View className="flex-row items-center justify-between w-60 mt-10">
        <View className="w-24">
          <Button isCancel={true} onPress={cancelPressHandler}>
            Cancel
          </Button>
        </View>
        <View className="w-24">
          <Button onPress={submitHandler}>Done</Button>
        </View>
      </View>
    </View>
  );
}

export default AddRecipeForm;
