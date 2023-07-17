import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

function QuickInfo({ size }){


    return(
        <View className="absolute flex-row bottom-0 right-1.5 px-2.5 py-1.5">
            <View>
                <Text className={`text-white ${size}`}>2 servings</Text>
            </View>
            <View className="flex-row justify-center items-center pl-[10%]">
                <Ionicons name='time' size={size} color='white'/>
                <Text className={`text-white ${size}`}>20 min</Text>
            </View>
            
        </View>
        
    )
}

export default QuickInfo;