import { StyleSheet, Pressable, ImageBackground, View, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import IconButton from "../Util/IconButton";
import QuickInfo from "./QuickInfo";

function RecipeCard({ children, height, width, cHeight, cWidth, size, pressHandler }) {

    return (
        <View style={styles.gridItem} className={`my-8 ml-6 mr-3 rounded-lg ${cHeight} ${cWidth}`}>
            <Pressable onPress={pressHandler} className="flex-1">
                <View>
                    <ImageBackground
                    style={{height, width}}
                    source={{ uri: "https://lifeloveandgoodfood.com/wp-content/uploads/2023/03/chicken_fried_rice00032a-1200x1200-1.jpg"}}
                    imageStyle={{borderRadius: 10}}
                    >
                        <LinearGradient 
                        colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.75)"]}
                        style={styles.overlay} />
                        <IconButton name="star-outline" size={24} color="white" className="absolute top-2.5 right-2.5" />
                        <Text className="absolute top-3/4 left-2.5 font-bold text-white text-center text-sm m-0">
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
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 12,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 8,
    }
})