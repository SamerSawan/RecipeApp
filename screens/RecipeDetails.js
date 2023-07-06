import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Util/Button";

function RecipeDetails(){
    return (
    <View style={styles.container}>
        <Button name="arrow-back-outline" size={12} color="black"/>
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
        alignItems: 'center',
        backgroundColor: "#AFD3CA",
    }
})