import { StyleSheet, View, Text, Pressable, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from '../../constants/styles';

function onClick(){
    console.log("search bar clicked")
}

function SearchBar() {
    return (
        <View className="flex-1">
            <View className="flex-row w-60 h-10 border-primary150 border rounded-lg mt-24 ml-8">
                <Ionicons name="search-outline" color={GlobalStyles.colors.primary150} size={24} style={styles.icon}/>
                <TextInput className="flex-1 text-primary150" placeholder='Search' placeholderTextColor={GlobalStyles.colors.primary150} />
            </View>
        </View>
    )
    
}

export default SearchBar;

const styles = StyleSheet.create({
    icon: {
        marginVertical: 6,
        marginHorizontal: 10
    },
    textInput: {
        color: GlobalStyles.colors.primary150
    }
})