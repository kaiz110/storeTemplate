import React from 'react'
import { StyleSheet, View, Text, Button, LogBox } from 'react-native'

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

const SignInScreen = ({route}) => {
    const func = route.params?.goto
    return <View>
        <Text>SignInScreen</Text>
        <Button
            title='Sign In'
            onPress={() => func()}
        />
    </View>
}

const styles = StyleSheet.create({})

export default SignInScreen