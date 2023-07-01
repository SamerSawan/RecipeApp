import { StyleSheet, View, Text } from "react-native";

function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                this is the Home Screen
            </Text>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#AFD3CA",
    },
    text: {
        margin: 100
    }
})