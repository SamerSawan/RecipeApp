import { useState } from "react";
import { View, Image, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Input from "./Input";
import ListInput from "./ListInput";
import Button from "../Util/Button";
import Ingredient from "../../models/ingredient";

function AddRecipeForm() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [instructions, setInstructions] = useState([]);
  const [instruction, setInstruction] = useState("");

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
    ingr = new Ingredient(
        Math.floor(Math.random() * 100),
        ingredient,
        quantity
    )
    setIngredient("")
    setQuantity("")
    setIngredients((prevIngredients) => [...prevIngredients, ingr])
    console.log(ingredients)
  }
  return (
    <View className="">
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
                <Button onPress={pickImage}>Pick Image</Button>
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
        </View>
        <View className="mt-4">
          <ListInput
            label="Instructions"
            placeholder="Instruction"
            buttonTitle="add instruction"
            onChangeText={instructionChangeHandler}
            value={instruction}
          />
        </View>
      </View>
    </View>
  );
}

export default AddRecipeForm;
