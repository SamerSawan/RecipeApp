import { Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

function Button({ style }) {

    function onPress() {
        console.log("Icon pressed");
    }

    return (
        <Pressable style={style} onPress={onPress}>
            <Ionicons name="star-outline" size={24} color="white"/>
        </Pressable>
    )
}

export default Button;
