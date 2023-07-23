import { TextInput, Text, View } from "react-native"


function Input({label}){
    return (
        <View className="flex-row">
            <Text className="text-primary200 mr-5">
                {label}
            </Text>
            <TextInput className="text-black border-2 border-primary150 px-2 py-0.5 rounded-md" placeholder="hello world" />
        </View>
    )
}

export default Input