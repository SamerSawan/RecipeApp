import { StyleSheet, View, Text } from "react-native";

function RecipesScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                this is the Recipes Screen
            </Text>
        </View>
    )
}

export default RecipesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#AFD3CA"
    },
    text: {
        margin: 100
    }
})