import { StyleSheet, View, Text } from "react-native";
import HeroText from "../components/Home/HeroText";
import Title from "../components/Util/Title";
import RecipeCard from "../components/Home/RecipeCard";

function HomeScreen() {
    return (
        <View style={styles.container}>
            <HeroText />
            <Title style={styles.recent}>Recently Viewed Recipes</Title>
            <View>
                <RecipeCard />
            </View>
            <Title style={styles.favourite}>Favourite Recipes</Title>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#AFD3CA",
    },
    recent: {
        marginTop: 60,
        paddingLeft: 20,
    },
    favourite: {
        marginTop: 40,
        paddingLeft: 20
    }
})