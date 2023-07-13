import { StyleSheet, View, FlatList } from "react-native";
import SearchBar from "../components/Search/SearchBar";
import Button from "../components/Util/IconButton";
import CategoryCarousel from "../components/Search/CategoryCarousel";
import RecipeCard from "../components/Home/RecipeCard";

import { RECIPES } from "../data/dummy-data";
import { GlobalStyles } from "../constants/styles";



function RecipesScreen({ navigation }) {

    function renderRecipeItem({ item }) {
        function pressHandler() {
            navigation.navigate('Recipe Details', {
                recipeId: item.id
            })
        }

        return (
            <RecipeCard height={150} width={300} size={14} pressHandler={pressHandler}>{item.title}</RecipeCard>
        );
    }


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
        backgroundColor: GlobalStyles.colors.primary100,
    },
    innerContainer: {
        height: '20%',
        flexDirection: 'row'
    },
    filter: {
        marginTop: 100,
        marginRight: 40,
        backgroundColor: GlobalStyles.colors.primary300,
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