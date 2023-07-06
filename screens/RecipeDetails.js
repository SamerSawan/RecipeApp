import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Util/Button";
import { RECIPES } from "../data/dummy-data";
import Title from "../components/Util/Title";

function RecipeDetails({ navigation }){

    function pressHandler(){
        navigation.goBack()
        console.log("going back");
    }

    return (
    <View style={styles.container}>
        <Button style={styles.backButton} name="arrow-back-outline" size={30} color="#2A7C68" onPress={pressHandler}/>
        <Title style={styles.titleContainer} textStyle={styles.titleText}>Fried Rice</Title>
    </View>
    )
}

export default RecipeDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: "#AFD3CA",
        paddingTop: 60
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
    }
})