import { StyleSheet, Pressable, ImageBackground, View, Text } from "react-native";

function RecipeCard() {

    function cardPressHandler() {
        console.log("card pressed")
    }

    return (
        <View style={styles.gridItem}>
            <Pressable onPress={cardPressHandler} style={styles.button}>
                <View style={styles.innerContainer}>
                    <ImageBackground 
                    style={styles.image} 
                    source={{ uri: "https://lifeloveandgoodfood.com/wp-content/uploads/2023/03/chicken_fried_rice00032a-1200x1200-1.jpg"}}
                    imageStyle={{borderRadius: 10}}
                    >
                        <Text style={styles.title}>
                            Recipe
                        </Text>
                    </ImageBackground>
                </View>
            </Pressable>
        </View>
        
    )
}

export default RecipeCard;

const styles = StyleSheet.create({
    gridItem: {
        margin: 24,
        height: 150,
        width: 150,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
    },
    button: {
        flex: 1,
    },
    image: {
        width: 150,
        height: 150,
    },
    innerContainer: {
        flex: 1,
        padding: 24,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    }
})