import { Pressable, Text } from 'react-native'

function Button({ children, style, onPress }){
    return (
        <Pressable>
            <Text style={style}>{children}</Text>
        </Pressable>
    )
    
}

export default Button;