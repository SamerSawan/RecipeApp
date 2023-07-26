import { TextInput, Text, View } from "react-native"
import Button from "../Util/Button"


function ListInput({label, placeholder, onChangeText, value, quantityOnChangeText, quantity, buttonTitle, isIngredient}){
    return (
        <View className="">
            <View className="items-center">
                <Text className="text-primary200 mr-5">
                    {label}
                </Text>
            </View>
            <View className={isIngredient ? "mt-2 flex-row" : "mt-2 items-center"}>
                <TextInput 
                className="text-black mr-2 border-2 border-primary150 px-2 py-0.5 rounded-md" 
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder} />
                {isIngredient ? 
                <TextInput 
                className="text-black border-2 border-primary150 px-2 py-0.5 rounded-md" 
                placeholder="Quantity" /> 
                : <></>}
            </View>
            <View className="my-3 items-center">
                <View className="w-36">
                    <Button>{buttonTitle}</Button>
                </View>
            </View>
        </View>
    )
}

export default ListInput