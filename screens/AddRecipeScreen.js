import { View } from "react-native";
import AddRecipeForm from "../components/Forms/AddRecipeForm";
import Button from "../components/Util/Button";

function AddRecipeScreen({navigation}){

    function cancelPressHandler() {
        navigation.goBack();
      }

    return (
        <View className="flex-1 items-center bg-primary100">
            <AddRecipeForm />
            <View className="flex-row items-center justify-between w-60">
                <Button onPress={cancelPressHandler}>Cancel</Button>
                <Button>Done</Button>
            </View>
        </View>
    )
}

export default AddRecipeScreen;