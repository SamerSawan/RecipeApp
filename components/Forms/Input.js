import { TextInput, Text, View } from "react-native"


function Input({label, placeholder, onChangeText, value, style}){
    return (
        <View className={"items-center"}>
            <Text className="text-primary200">
                {label}
            </Text>
            <TextInput
            
            className={style + " text-black border-2 border-primary150 px-2 py-0.5 rounded-md max-w-2/3"}
            multiline 
            blurOnSubmit 
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder} />
        </View>
    )
}

export default Input