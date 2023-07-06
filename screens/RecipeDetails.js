import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Util/IconButton";
import { RECIPES } from "../data/dummy-data";
import Title from "../components/Util/Title";
import RecipeCard from "../components/Home/RecipeCard";

function RecipeDetails({ navigation }){

    function pressHandler(){
        navigation.goBack()
        console.log("going back");
    }

    return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            <Button style={styles.backButton} name="arrow-back-outline" size={30} color="#2A7C68" onPress={pressHandler}/>
            <Title style={styles.titleContainer} textStyle={styles.titleText}>Fried Rice</Title>
        </View>
        <View style={styles.recipeContainer}>
            <RecipeCard height={150} width={300} size={14}></RecipeCard>
        </View>
        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua.</Text>
    </View>
    )
}

export default RecipeDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#AFD3CA",
        paddingTop: 60
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    backButton: {
        position: "absolute",
        top: '8%',
        left: '10%'
    },
    titleContainer: {
        marginTop: 5
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2A7C68'
    },
    recipeContainer: {
        marginLeft: 20
    },
    description: {
        width: 300,
        height: 150,
        marginLeft: 56
    }
})