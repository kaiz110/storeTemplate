import React from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constant'
import { Feather } from '@expo/vector-icons'
import { SHOPPING_BAG_PRODUCTS } from '../../constant'


const ShoppingBagScreen = ({navigation}) => {

    const renderItem = ({item}) => (
        <View style={styles.cardContainer}>
            <Image style={styles.image} source={{uri: item.image}}/>

            <View>
                <Text style={styles.name}>{item.name}</Text>

                <View style={{margin: 20}}>
                    <View style={styles.pickerContainer}>
                        <Text style={styles.pickerText}>Color</Text>
                        <FlatList
                            data={['white','red']}
                            keyExtractor={data => data}
                            contentContainerStyle={styles.pickerList}
                            horizontal
                            renderItem={({item}) => (
                                <TouchableOpacity style={[styles.colorPick, { backgroundColor: item}]}>

                                </TouchableOpacity>
                            )}
                        />
                    </View> 

                    <View style={styles.pickerContainer}>
                        <Text style={styles.pickerText}>Size</Text>
                        <FlatList
                            data={['S','M']}
                            keyExtractor={data => data}
                            contentContainerStyle={styles.pickerList}
                            horizontal
                            renderItem={({item}) => (
                                <TouchableOpacity style={styles.sizePick}>
                                    <Text style={styles.sizeText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>   
                </View>
                

                <Text style={styles.price}>$0.0</Text>
            </View>

            <View style={styles.addSubContainer}>
                <TouchableOpacity>
                    <Feather name='plus-square' size={25}/>
                </TouchableOpacity>

                <Text>1</Text>

                <TouchableOpacity>
                    <Feather name='minus-square' size={25}/>
                </TouchableOpacity>
            </View>
        </View>
    )

    return (
        <ScrollView contentContainerStyle={{flex: 1, justifyContent: 'space-between'}}>
            <FlatList
                data={SHOPPING_BAG_PRODUCTS}
                keyExtractor={data => data.name}
                renderItem={renderItem}
            />

            <View style={styles.bottomContainer}>
                <View style={styles.bottomText}>
                    <Text>Total</Text>
                    <Text style={{fontWeight: 'bold',fontSize: 16}}>$0.0</Text>
                </View>
                <Button
                    title='CONTINUE'
                    buttonStyle={styles.bottomTextContinue}
                    onPress={() => navigation.navigate('PaymentMethod')}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row', 
        margin: 5,
    },
    image: {
        height: SCREEN_HEIGHT * 0.28,
        width: (SCREEN_HEIGHT * 0.28) * 0.6,
        backgroundColor: 'grey',
        borderRadius: 7
    },
    name: {
        fontWeight: 'bold',
        marginLeft: 10, 
        marginTop: 25
    },
    pickerContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        margin: 2
    },
    pickerText: {
        marginRight: 20, 
        fontSize: 13, 
        width: '10%'
    },
    pickerList: {
        width: '90%'
    },
    colorPick: {
        alignItems: 'center', 
        justifyContent: 'center',
        width: 25,
        height: 25,
        borderColor: '#dedede', 
        borderWidth: 1,
        marginBottom: 5,
        marginRight: 5
    },
    sizePick: {
        alignItems: 'center', 
        justifyContent: 'center',
        width: 25,
        height: 25, 
        borderWidth: 1,
        marginBottom: 5,
        marginRight: 5,
        backgroundColor: 'black'
    },
    sizeText: {
        color: 'white',
        fontWeight: 'bold', 
        fontSize: 12
    },
    price: {
        fontWeight: 'bold', 
        position: 'absolute', 
        bottom: 0,
        left: 0, 
        margin: 10, 
        fontSize: 16
    },
    addSubContainer: {
        position: 'absolute', 
        right: 0, 
        height: '100%', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingVertical: 25, 
        paddingHorizontal: 5
    },
    bottomContainer: {
        backgroundColor: 'white',
        width: SCREEN_WIDTH, 
        padding: 15
    },
    bottomText: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginBottom: 10
    },
    bottomTextContinue: {
        backgroundColor: 'black',
        padding: 10, 
        width: '100%'
    }
})

export default ShoppingBagScreen