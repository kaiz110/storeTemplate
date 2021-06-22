import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const ShopScreen = ({navigation}) => {
    return <View>
        <Text>ShopScreen</Text>
        <Button
            title='Go to Shop Detail'
            onPress={() => navigation.navigate('ShopDetail')}
        />
        <Button
            title='Go to Shopping bag'
            onPress={() => navigation.navigate('CheckoutNav')}
        />
    </View>
}

const styles = StyleSheet.create({})

export default ShopScreen