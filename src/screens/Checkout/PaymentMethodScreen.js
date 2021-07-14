import React, {useLayoutEffect, useState} from 'react'
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons'

const  CREDIT_CARDS = [
    {
        number: '4242424242442424242'
    },
    {
        number: '5252525223525252525'
    },
] 

const PaymentMethodScreen = ({navigation}) => {
    const [choose , setChoose] = useState(null)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style={{padding: 10}} onPress={() => navigation.navigate('Shipping')}>
                    <Text style={{fontWeight: 'bold'}}>Next</Text>
                </TouchableOpacity>
            )
        })
    }, [navigation])

    const listHeader = () => (
        <View>
            <View>
                <Text style={styles.title}>Payment Method</Text>
                <Divider/>
            </View>
        
            <View style={styles.largeIcon}>
                <FontAwesome name='credit-card' size={170}/>
            </View>

            <Divider/>

            <TouchableOpacity style={styles.card} onPress={() => setChoose('Apple')}>
                <FontAwesome name='credit-card-alt' size={25}/>
                <Text style={styles.cardText}>Apple Pay</Text>
                {choose === 'Apple' &&
                <FontAwesome name='check' size={18} style={styles.check} />}
            </TouchableOpacity>

            <Divider/>
        </View>
    )

    const listFooter = () => (
        <View style={{marginVertical: 20}}>
            <Divider/>

            <TouchableOpacity style={styles.card}>
                <FontAwesome name='plus' size={20} style={{marginRight: 15}}/>
                <Text style={styles.cardText}>Add New Card ...</Text>
            </TouchableOpacity>

            <Divider/>
        </View>
    )

    return <View style={{backgroundColor: 'white', flex: 1}}>
            <FlatList
                data={CREDIT_CARDS}
                keyExtractor={data => data.number}
                ListHeaderComponent={listHeader}
                ListFooterComponent={listFooter}
                renderItem={({item}) => (
                    <View>
                        <TouchableOpacity style={styles.card} onPress={() => setChoose(item.number)}>
                            <FontAwesome name='cc-visa' size={25}/>
                            <Text style={styles.cardText}>Visa Ending in {item.number.slice(-4)}</Text>
                            {choose === item.number &&
                            <FontAwesome name='check' size={18} style={styles.check} />}
                        </TouchableOpacity>

                        <Divider/>
                    </View>
                )}
            />
    </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28, 
        fontWeight: 'bold',
        margin: 10
    },
    largeIcon: {
        alignItems: 'center', 
        width: '100%', 
        marginVertical: 45
    },
    card: {
        flexDirection: 'row', 
        alignItems: 'center', 
        margin: 10
    },
    cardText: {
        marginLeft: 10, 
        opacity: 0.5
    },
    check: {
        position: 'absolute', 
        right: 15
    }
})

export default PaymentMethodScreen