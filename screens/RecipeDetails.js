import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Util/Button";

function RecipeDetails({ navigation }){

    function pressHandler(){
        navigation.goBack()
        console.log("going back");
    }

    return (
    <View style={styles.container}>
        <Button name="arrow-back-outline" size={30} color="black" onPress={pressHandler}/>
        <Text>Hello World! Recipe Details</Text>
    </View>
    )
}

export default RecipeDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: "#AFD3CA",
        paddingTop: 100
    }
})