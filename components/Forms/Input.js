import { TextInput, Text, View } from "react-native"


function Input({label, placeholder, style}){
    return (
        <View className={style + " items-center justify-between"}>
            <Text className="text-primary200">
                {label}
            </Text>
            <TextInput className="text-black border-2 border-primary150 px-2 py-0.5 rounded-md max-w-2/3" multiline blurOnSubmit placeholder={placeholder} />
        </View>
    )
}

export default Input