import { StyleSheet, View, Text } from "react-native";
import SearchBar from "../components/Search/SearchBar";
import Button from "../components/Util/Button";
import CategoryCarousel from "../components/Search/CategoryCarousel";

function RecipesScreen() {
    return (
        <>
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <SearchBar />
                <Button style={styles.filter} name="filter" size={24} color="white"/>
            </View>
            <CategoryCarousel />
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
    }
})