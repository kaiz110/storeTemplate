import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const WishListScreen = ({navigation}) => {
    return <View>
        <Text>WishListScreen</Text>
        <Button
            title='Go to Shopping bag'
            onPress={() => navigation.navigate('CheckoutNav')}
        />
    </View>
}

const styles = StyleSheet.create({})

export default WishListScreen