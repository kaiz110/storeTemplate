import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const ShoppingBagScreen = ({navigation}) => {
    return <View>
        <Text>ShoppingBagScreen</Text>
        <Button
            title='Go to Payment' 
            onPress={() => navigation.navigate('CheckoutNav',{screen: 'PaymentMethod'})}
        />
    </View>
}

const styles = StyleSheet.create({})

export default ShoppingBagScreen