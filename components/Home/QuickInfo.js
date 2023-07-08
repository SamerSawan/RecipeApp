import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

function QuickInfo({ size }){

    const extraStyle = StyleSheet.create({
        size: {
            fontSize: size
        }
    })

    return(
        <View style={styles.container}>
            <View>
                <Text style={[styles.quickInfo, extraStyle.size]}>2 servings</Text>
            </View>
            <View style={styles.innerContainer}>
                <Ionicons name='time' size={size} color='white'/>
                <Text style={[styles.quickInfo, extraStyle.size]}>20 min</Text>
            </View>
            
        </View>
        
    )
}

export default QuickInfo;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flexDirection: 'row',
        bottom: 0,
        right: 5,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 8,
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '10%'
    },
    quickInfo: {
        color: 'white',
    }
})