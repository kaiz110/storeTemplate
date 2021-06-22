import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const PaymentMethodScreen = ({navigation}) => {
    return <View>
        <Text>PaymentMethodScreen</Text>
        <Button
            title='Go to Shipping'
            onPress={() => navigation.navigate('Shipping')}
        />
    </View>
}

const styles = StyleSheet.create({})

export default PaymentMethodScreen