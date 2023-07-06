import { Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

function Button({ name, size, color, style, onPress }) {

    return (
        <Pressable style={style} onPress={onPress}>
            <Ionicons name={name} size={size} color={color}/>
        </Pressable>
    )
}

export default Button;
