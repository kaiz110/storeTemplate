import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const LogInScreen = ({navigation}) => {
    return <View>
        <Text>LogInScreen</Text>
        <Button
            title='Goto Sign in'
            onPress={() => navigation.navigate('SignIn')}
        />
        <Button
            title='Goto Sign up'
            onPress={() => navigation.navigate('SignUp')}
        />
    </View>
}

const styles = StyleSheet.create({})

export default LogInScreen