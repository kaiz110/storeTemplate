import React from 'react'
import { StyleSheet, View, Text, Image,SafeAreaView,FlatList } from 'react-native'
import { Button, Card } from 'react-native-elements'
import { ORDER_PRODUCTS } from '../../constant'

const OrderScreen = ({navigation}) => {

    const cardRender = ({item}) => {
        return <Card containerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <Image style={styles.headerImage} source={{uri: item.products[0].image}}/>

                <View style={styles.headerOverlay}/>

                <Text style={styles.headerOrderText}>Order Placed</Text>
                <Text style={styles.headerText}>Ordered on {item.date}</Text>
            </View>

            <View>
                {item.products.map(val => (
                    <View key={val.name} style={styles.bodyContainer}>
                        <Image style={styles.bodyImage} source={{uri: val.image}}/>
                        <Text style={styles.bodyname}>{val.name}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.footContainer}>
                <Text style={{fontWeight: 'bold'}}>Total: $110.0</Text>
                <Button
                    title='REORDER'
                    buttonStyle={styles.button}
                    titleStyle={{fontSize: 26/2}}
                />
            </View>
        </Card>
    }

    return <SafeAreaView style={{flex: 1}}>
        <FlatList
            data={ORDER_PRODUCTS}
            keyExtractor={data => data.date + String(Math.random())}
            contentContainerStyle={{paddingBottom: 10}}
            renderItem={cardRender}
        />
        
    </SafeAreaView>
}


const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 0,
        borderRadius: 7,
        elevation: 5
    },
    headerContainer: {
        alignItems: 'center', 
        justifyContent: 'center'
    },
    headerImage: {
        height: 100, 
        width: '100%',
        borderRadius: 7, 
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    headerOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.45)',
        borderRadius: 7,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
    },
    headerOrderText: {
        position: 'absolute', 
        color: 'white',
        fontWeight: 'bold'
    },
    headerText: {
        position: 'absolute', 
        color: 'white',
        fontSize: 12, 
        bottom: 5, 
        right: 5,
        fontWeight: 'bold',
        opacity: 0.7
    },
    bodyContainer: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    bodyImage: {
        height: 80, 
        width: 50, 
        margin: 10, 
        borderRadius: 5
    },
    bodyName: {
        fontSize: 26/2, 
        fontWeight: 'bold', 
        opacity: 0.5, 
        marginLeft: 10
    },
    footContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around',
        marginBottom: 10
    },
    button: {
        padding: 15, 
        backgroundColor: 'black',
        paddingHorizontal: 25
    }
})

export default OrderScreen