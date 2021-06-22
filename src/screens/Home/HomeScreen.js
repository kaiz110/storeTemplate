import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const HomeScreen = ({navigation}) => {
    return <View>
        <Text>HomeScreen</Text>
        <Button
            title='Go to Shopping bag'
            onPress={() => navigation.navigate('CheckoutNav')}
        />
        <Button
            title='Go to Shop Detail'
            onPress={() => navigation.navigate('ShopDetail')}
        />
        <Button
            title='Go to Shop'
            onPress={() => navigation.navigate('Shop')}
        />
    </View>
}

const styles = StyleSheet.create({})

export default HomeScreen