import { View, Text, StyleSheet, FlatList } from "react-native";
import IconButton from "../components/Util/IconButton";
import { RECIPES } from "../data/dummy-data";
import { INGREDIENTS } from "../data/dummy-data";
import Title from "../components/Util/Title";
import RecipeCard from "../components/Home/RecipeCard";
import Button from "../components/Util/Button";



function RecipeDetails({ navigation }){


    function renderIngredientItem({ item }) {
        return (
            <View style={styles.ingredientContainer}>
                <Text style={styles.ingredientText}>{item.name}</Text>
                <Text style={styles.ingredientText}>{item.amount}</Text>
            </View>
        )
    }

    function pressHandler(){
        navigation.goBack()
        console.log("going back");
    }

    return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            <IconButton style={styles.backButton} name="arrow-back-outline" size={30} color="#2A7C68" onPress={pressHandler}/>
            <Title style={styles.titleContainer} textStyle={styles.titleText}>Fried Rice</Title>
        </View>
        <View style={styles.recipeContainer}>
            <RecipeCard height={150} width={300} size={14}></RecipeCard>
        </View>
        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua.</Text>
        <View style={styles.buttonsContainer}>
            <View style={styles.selectedButtonContainer}>
                <Button style={styles.selectedButton}>Ingredients</Button>
            </View>
            <View style={styles.buttonContainer}>
                <Button style={styles.button}>Procedure</Button>
            </View>
        </View>
        <FlatList style={styles.list}
        data={INGREDIENTS}
        keyExtractor={(item) => item.id}
        renderItem={renderIngredientItem}/>
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
        width: 290,
        height: 80,
        marginLeft: 54,
        fontSize: 15
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        paddingHorizontal: 50
    },
    selectedButtonContainer: {
        backgroundColor: '#2A7C68',
        borderRadius: 10,
        padding: 16,
    },
    buttonContainer: {
        padding: 16,
    },
    selectedButton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    button: {
        color: '#129575',
        fontWeight: 'bold',
        fontSize: 16
    },
    list: {
        marginVertical: 20
    },
    ingredientContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#DBEBE7',
        marginVertical: 10,
        height: 50,
        width: 270,
        borderRadius: 10,
    },
    ingredientText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal: 10
    }
})