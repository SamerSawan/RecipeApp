import { StyleSheet, View, FlatList } from "react-native";
import HeroText from "../components/Home/HeroText";
import Title from "../components/Util/Title";
import RecipeCard from "../components/Home/RecipeCard";

import { RECIPES } from "../data/dummy-data";
import { GlobalStyles } from "../constants/styles";



function HomeScreen({ navigation }) {

    function renderRecipeItem({ item }) {

        function pressHandler(){
            navigation.navigate('Recipe Details', {
                recipeId: item.id
            })
        }

        return (
            <RecipeCard height={150} width={150} size={12} pressHandler={pressHandler}>{item.title}</RecipeCard>
        );
    }

    return (
        <View style={styles.container}>
            <HeroText />
            <Title style={styles.recent} textStyle={styles.titleText}>Recently Viewed Recipes</Title>
            <FlatList 
            style={styles.list} 
            data={RECIPES} 
            keyExtractor={(item) => item.id} 
            renderItem={renderRecipeItem} 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}/>
            <Title style={styles.favourite} textStyle={styles.titleText}>Favourite Recipes</Title>
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
        backgroundColor: GlobalStyles.colors.primary100,
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
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 14
    }
})