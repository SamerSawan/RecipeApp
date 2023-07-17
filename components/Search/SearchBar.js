import { StyleSheet, View, Text, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from '../../constants/styles';

function onClick(){
    console.log("search bar clicked")
}

function SearchBar() {
    return (
        <View className="flex-1" >
            <Pressable className="w-60 border-primary150 border rounded-lg mt-24 ml-8" onPress={onClick}>
                <View className="flex-row">
                    <Ionicons name="search-outline" color={GlobalStyles.colors.primary150} size={24} style={styles.icon}/>
                    <Text className="my-2.5 text-primary150">
                            Search Recipe
                    </Text>
                </View>
            </Pressable>
            
        </View>
    )
    
}

export default SearchBar;

const styles = StyleSheet.create({
    icon: {
        marginVertical: 6,
        marginHorizontal: 10
    },
})