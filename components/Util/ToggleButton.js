import { Pressable, Text } from 'react-native'

function ToggleButton({ children, style, onPress }){
    return (
        <Pressable>
            <Text style={style}>{children}</Text>
        </Pressable>
    )
    
}

export default ToggleButton;