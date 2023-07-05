import { StyleSheet, View, Text } from "react-native";
import SearchBar from "../components/Util/SearchBar";

function RecipesScreen() {
    return (
        <SearchBar />
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