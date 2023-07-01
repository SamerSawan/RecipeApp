import { StyleSheet, View, Text } from "react-native";

function Title({ children, style }){
    return (
        <View style={style}>
            <Text style={styles.text}>
                { children }
            </Text>
        </View>
    )
    
}

export default Title;

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 14
    }
})