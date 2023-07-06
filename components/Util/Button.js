import { StyleSheet, Pressable, Text } from 'react-native'

function Button({ children, style }){
    return (
        <Pressable>
            <Text style={style}>{children}</Text>
        </Pressable>
    )
    
}

export default Button;

const styles = StyleSheet.create({
    
})