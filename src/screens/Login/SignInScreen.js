import React, { useState } from 'react'
import { StyleSheet, View , LogBox, StatusBar, ScrollView, SafeAreaView } from 'react-native'
import { Text } from 'react-native-elements'
import CustomInput from '../../component/CustomInput'
import CustomButton from '../../component/CustomButton'
import LoginHeader from '../../component/LoginHeader'

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

const SignInScreen = ({ route }) => {
    const func = route.params?.goto // remove
    const [ email, setEmail] = useState('')
    const [ password, setPassword ] = useState('')

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={styles.container}>
                <LoginHeader title='Sign In'/>

                <View style={styles.inputContainer}>
                    <CustomInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder='E-mail or phone number'
                    />
                    <CustomInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder='Password'
                        secureTextEntry
                    />
                    <CustomButton
                        title='Log In'
                        onPress={() => func()}
                    />
                </View>
                
                
                <View style={styles.inputContainer}>
                    <Text style={styles.or}>OR</Text>

                    <CustomButton
                        title='Facebook Login'
                        color='#375ba3'
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    inputContainer: {
        margin: 15
    },
    or: {
        alignSelf: 'center',
        fontSize: 17,
        fontWeight: 'bold'
    }
})

export default SignInScreen