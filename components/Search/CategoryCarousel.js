import { View, Text, FlatList, Pressable } from "react-native";

import { CATEGORIES } from "../../data/dummy-data";

function renderCategory({ item }){
    return (
        <Text className="text-primary200">{item.title}</Text>
    )
}

function CategoryCarousel(){
    return (
        <View className="mt-2.5 ml-7">
            <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id}
            renderItem={renderCategory}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <Pressable className="w-1/6"/>}/>
        </View>
    
    )
    
}

export default CategoryCarousel;