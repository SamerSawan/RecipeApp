import { StyleSheet, View, FlatList } from "react-native";
import SearchBar from "../components/Search/SearchBar";
import Button from "../components/Util/Button";
import CategoryCarousel from "../components/Search/CategoryCarousel";
import RecipeCard from "../components/Home/RecipeCard";

import { RECIPES } from "../data/dummy-data";

function renderRecipeItem({ item }) {
    return (
        <RecipeCard height={150} width={300} size={14}>{item.title}</RecipeCard>
    );
}

function RecipesScreen() {
    return (
        <>
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <SearchBar />
                <Button style={styles.filter} name="filter" size={24} color="white"/>
            </View>
            <CategoryCarousel />
            <FlatList
            style={styles.list} 
            data={RECIPES} 
            keyExtractor={(item) => item.id}
            renderItem={renderRecipeItem}
            />
        </View>
            
        </>
        
    )
}

export default RecipesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center',
        backgroundColor: "#AFD3CA",
    },
    innerContainer: {
        height: '20%',
        flexDirection: 'row'
    },
    filter: {
        marginTop: 100,
        marginRight: 40,
        backgroundColor: '#2A7C68',
        height: 40,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    list: {
        marginTop: 15,
        marginLeft: 20,
    }
})