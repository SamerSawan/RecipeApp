import { View } from "react-native"
import Input from "./Input"
import ListInput from "./ListInput"


function AddRecipeForm(){
    return (
        <View className="">
            <View className="my-10 items-center">
                <Input label="Name" placeholder={"Recipe Name"} style="flex-row w-40"/>
            </View>
            <View className="mb-10">
                <Input label="Description" placeholder={"Description"} />
            </View>
            <View className="mb-10">
                <Input label="Image" />
            </View>
            <View>
                <View>
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