import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const ShippingScreen = ({navigation}) => {
    return <View>
        <Text>ShippingScreen</Text>
        <Button
            title='Go to Checkout'
            onPress={() => navigation.navigate('Checkout')}
        />
    </View>
}

const styles = StyleSheet.create({})

export default ShippingScreen