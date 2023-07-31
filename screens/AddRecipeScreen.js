import { View, ScrollView } from "react-native";
import AddRecipeForm from "../components/Forms/AddRecipeForm";
import Button from "../components/Util/Button";

function AddRecipeScreen({navigation}){

    return (
        <ScrollView className="bg-primary100">
            <View className="flex-1 items-center bg-primary100">
                <AddRecipeForm navigation={navigation} />
            </View>
        </ScrollView>
    )
}

export default AddRecipeScreen;