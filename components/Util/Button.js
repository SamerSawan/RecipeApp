import { Pressable, Text } from 'react-native'

function Button({ children, isCancel, onPress }){
    return (
        <Pressable onPress={onPress} className={(isCancel ? "bg-pink-700 " : "bg-primary300 ") + "px-5 py-2 rounded-lg "}>
            <Text className="text-white text-center">{children}</Text>
        </Pressable>
    )
}

export default Button;