import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function HeroText() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Hello Samer
            </Text>
            <Text style={styles.hero}>
                What are you cooking today?
            </Text>
        </View>
    )
    

}

export default HeroText;

const styles =  StyleSheet.create({
    container: {
        marginTop: 100,
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    hero: {
        color: GlobalStyles.colors.primary200
    }
})