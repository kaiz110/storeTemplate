import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const OrderScreen = ({navigation}) => {
    return <View>
        <Text>OrderScreen</Text>
        <Button
            title='Go to Shopping bag'
            onPress={() => navigation.navigate('CheckoutNav')}
        />
    </View>
}

const styles = StyleSheet.create({})

export default OrderScreen