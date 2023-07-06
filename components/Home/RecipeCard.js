import { StyleSheet, Pressable, ImageBackground, View, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Button from "../Util/Button";
import QuickInfo from "./QuickInfo";

function RecipeCard({ children, height, width, size }) {

    function cardPressHandler() {
        console.log("card pressed")
    }

    return (
        <View style={[styles.gridItem, { height, width }]}>
            <Pressable onPress={cardPressHandler} style={styles.button}>
                <View style={styles.innerContainer}>
                    <ImageBackground 
                    style={{height, width}} 
                    source={{ uri: "https://lifeloveandgoodfood.com/wp-content/uploads/2023/03/chicken_fried_rice00032a-1200x1200-1.jpg"}}
                    imageStyle={{borderRadius: 10}}
                    >
                        <LinearGradient 
                        colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.75)"]}
                        style={styles.overlay} />
                        <Button name="star-outline" size={24} color="white" style={styles.icon} />
                        <Text style={styles.title}>
                            { children }
                        </Text>
                        <QuickInfo size={size} />
                    </ImageBackground>
                </View>
            </Pressable>
        </View>
        
    )
}

export default RecipeCard;

const styles = StyleSheet.create({
    gridItem: {
        marginTop: 40,
        margin: 24,
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
        position: "absolute",
        top: '75%',
        left: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 14,
        color: "white",
        margin: 0,
        opacity: 1
    },
    icon: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 10,
    }
})