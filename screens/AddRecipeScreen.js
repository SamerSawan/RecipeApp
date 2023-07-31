import { View, ScrollView } from "react-native";
import AddRecipeForm from "../components/Forms/AddRecipeForm";
import Button from "../components/Util/Button";

function AddRecipeScreen({navigation}){

    function cancelPressHandler() {
        navigation.goBack();
      }

    return (
        <ScrollView className="bg-primary100">
            <View className="flex-1 items-center bg-primary100">
                <AddRecipeForm />
                <View className="flex-row items-center justify-between w-60 mt-10">
                    <View className="w-24">
                        <Button isCancel={true} onPress={cancelPressHandler}>Cancel</Button>
                    </View>
                    <View className="w-24">
                        <Button>Done</Button>
                    </View>
                    
                </View>
            </View>
        </ScrollView>
    )
}

export default AddRecipeScreen;