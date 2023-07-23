import { Pressable, Text } from 'react-native'

function Button({ children, onPress }){
    return (
        <Pressable onPress={onPress} className="bg-primary300 px-5 py-2 rounded-lg">
            <Text className="text-white">{children}</Text>
        </Pressable>
    )
}

export default Button;