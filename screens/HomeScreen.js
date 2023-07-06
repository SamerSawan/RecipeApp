import { StyleSheet, View, FlatList } from "react-native";
import HeroText from "../components/Home/HeroText";
import Title from "../components/Util/Title";
import RecipeCard from "../components/Home/RecipeCard";

import { RECIPES } from "../data/dummy-data";

function renderRecipeItem({ item }) {
    return (
        <RecipeCard>{item.title}</RecipeCard>
    );
}

function HomeScreen() {

    

    return (
        <View style={styles.container}>
            <HeroText />
            <Title style={styles.recent}>Recently Viewed Recipes</Title>
            <FlatList 
            style={styles.list} 
            data={RECIPES} 
            keyExtractor={(item) => item.id} 
            renderItem={renderRecipeItem} 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}/>
            <Title style={styles.favourite}>Favourite Recipes</Title>
            <FlatList 
            style={styles.list} 
            data={RECIPES} 
            keyExtractor={(item) => item.id} 
            renderItem={renderRecipeItem} 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}/>
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
        paddingLeft: 20
    },
    list: {
        flex: 1,
        maxHeight: '30%'
    }
})