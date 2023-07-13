import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";

import { CATEGORIES } from "../../data/dummy-data";
import { GlobalStyles } from "../../constants/styles";

function renderCategory({ item }){
    return (
        <Text style={styles.unselectedText}>{item.title}</Text>
    )
}

function CategoryCarousel(){
    return (
        <View style={styles.container}>
            <FlatList 
            style={styles.list}
            data={CATEGORIES} 
            keyExtractor={(item) => item.id}
            renderItem={renderCategory}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <Pressable style={styles.separator}/>}/>
        </View>
    
    )
    
}

export default CategoryCarousel;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginLeft: 30
    },
    separator: {
        width: '15%',
    },
    unselectedText: {
        color: GlobalStyles.colors.primary200
    }
})