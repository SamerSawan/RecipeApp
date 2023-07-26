import { useState } from 'react';
import { View, Image } from "react-native"
import * as ImagePicker from 'expo-image-picker';
import Input from "./Input"
import ListInput from "./ListInput"
import Button from '../Util/Button';




function AddRecipeForm(){
    const [image, setImage] = useState(null);

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


    return (
        <View className="">
            <View className="my-10 items-center">
                <Input label="Name" placeholder={"Recipe Name"} style="flex-row w-40"/>
            </View>
            <View className="mb-10">
                <Input label="Description" placeholder={"Description"} />
            </View>
            <View className="mb-10 items-center">
                <View className="w-80 items-center">
                    <View className="w-36 mb-2">
                        <Button onPress={pickImage}>Pick Image</Button>
                    </View>
                    {image && 
                    <Image className="rounded-lg" source={{ uri: image }} style={{ width: 200, height: 200 }} />
                    }
                </View>
            </View>
            <View>
                <View className="items-center">
                    <ListInput label="Ingredients" placeholder="Ingredient Name" isIngredient={true} buttonTitle="add ingredient" />
                </View>
                <View className="mt-4">
                    <ListInput label="Instructions" placeholder="Instruction" buttonTitle="add instruction" />
                </View>
            </View>
        </View>
    )
}

export default AddRecipeForm