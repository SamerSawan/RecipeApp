import { useState } from 'react';
import { View, Image } from "react-native"
import * as ImagePicker from 'expo-image-picker';
import Input from "./Input"
import ListInput from "./ListInput"
import Button from '../Util/Button';

import Ingredient from '../../models/ingredient';




function AddRecipeForm(){
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState(null);
    const [ingredients, setIngredients] = useState([])
    const [ingredient, setIngredient] = useState(null)
    const [quantity, setQuantity] = useState('')
    const [instructions, setInstructions] = useState([])
    const [instruction, setInstruction] = useState('')


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
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

    function instructionChangeHandler(enteredText){
        setInstruction(enteredText);
    }

    return (
        <View className="">
            <View className="my-10 items-center">
                <Input 
                label="Name" 
                placeholder={"Recipe Name"}
                onChangeText={nameChangeHandler}
                value={name} 
                style="flex-row w-40"/>
            </View>
            <View className="mb-10">
                <Input 
                label="Description" 
                placeholder={"Description"}
                onChangeText={descChangeHandler}
                value={desc} />
            </View>
            <View className="mb-10 items-center">
                <View className="w-36">
                    <Button onPress={pickImage}>Pick Image</Button>
                    {image && <Image className="rounded-lg" source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                </View>
            </View>
            <View>
                <View>
                    <ListInput 
                    label="Ingredients" 
                    placeholder="Ingredient Name" 
                    onChangeText={ingredientChangeHandler}
                    value={ingredient}
                    quantityOnChangeText={quantityChangeHandler}
                    quantity={quantity}
                    isIngredient={true} 
                    buttonTitle="add ingredient" />
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
    )
}

export default AddRecipeForm