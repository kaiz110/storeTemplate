import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity, FlatList } from 'react-native'
import { Octicons, FontAwesome } from '@expo/vector-icons'
import { Divider } from 'react-native-elements'
import styles from '../../constant/checkoutStyles'

const SHIPPING = [
    {
        name: 'UPS Ground',
        arrives: 'in 3 - 5 days',
        price: 'free'
    },
    {
        name: 'FedEx',
        arrives: 'tomorrow',
        price: '$5.99'
    }
]

const ShippingScreen = ({navigation}) => {
    const [ choose, setChoose ] = useState(null)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style={{padding: 10}} onPress={() => navigation.navigate('Checkout')}>
                    <Text style={{fontWeight: 'bold'}}>Done</Text>
                </TouchableOpacity>
            )
        })
    }, [navigation])

    const listHeader = () => (
        <View>
            <View>
                <Text style={styles.title}>Shipping</Text>
                <Divider/>
            </View>
        
            <View style={styles.largeIcon}>
                <Octicons name='package' size={170}/>
            </View>

            <Text style={{margin: 10}}>Shipping Method</Text>

            <Divider/>

        </View>
    )

    return <View style={styles.container}>
        <FlatList
            ListHeaderComponent={listHeader}
            data={SHIPPING}
            keyExtractor={data => data.name}
            renderItem={({item}) => (
                <View>
                    <TouchableOpacity style={{...styles.card, ...{justifyContent: 'space-between'}}} onPress={() => setChoose(item.name)}>
                        <View style={{marginLeft: 5}}>
                            <Text>{item.name}</Text>
                            <Text style={{ opacity: 0.5, fontSize: 12}}>Arrives {item.arrives}</Text>
                        </View>

                        <View style={{flexDirection: 'row'}}>
                            <Text>{item.price}</Text>
                            <FontAwesome 
                                name='check' 
                                size={18} 
                                style={{
                                    marginLeft: 10, 
                                    opacity: choose===item.name ? 1 : 0
                                }}/>
                        </View>
                    </TouchableOpacity>

                    <Divider/>
                </View>
            )}
        />
    </View>
}

export default ShippingScreen