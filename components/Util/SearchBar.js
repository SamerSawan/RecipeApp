import { StyleSheet, View, Text, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

function onClick(){
    console.log("search bar clicked")
}

function SearchBar() {
    return (
        <View style={styles.container} >
            <Pressable style={styles.innerContainer} onPress={onClick}>
                <View style={styles.innerText}>
                    <Ionicons name="search-outline" color='#71b1a1' size={24} style={styles.icon}/>
                    <Text style={styles.text}>
                            Search Recipe
                    </Text>
                </View>
            </Pressable>
            
        </View>
    )
    
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#AFD3CA",
    },
    innerContainer: {
        width: 250,
        borderColor: '#71b1a1',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 100,
        marginLeft: 32
    },
    innerText: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginVertical: 6,
        marginHorizontal: 10
    },
    text: {
        marginVertical: 10,
        color: '#71b1a1'
    }
})