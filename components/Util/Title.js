import { View, Text } from "react-native";

function Title({ children, style, textStyle }){
    return (
        <View style={style}>
            <Text className={textStyle}>
                { children }
            </Text>
        </View>
    )
    
}

export default Title;
    