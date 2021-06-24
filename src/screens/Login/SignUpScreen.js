import React, { useState } from 'react'
import { StyleSheet, View, StatusBar, ScrollView } from 'react-native'
import LoginHeader from '../../component/LoginHeader'
import CustomInput from '../../component/CustomInput'
import CustomButton from '../../component/CustomButton'

const SignUpScreen = () => {
    const [ fullname, setFullname ] = useState('')
    const [ phoneNumber, setPhoneNumber ] = useState('')
    const [ emailAddress, setEmailAddress ] = useState('')
    const [ password, setPassword ] = useState('')

    return <ScrollView style={styles.container}>
        <LoginHeader title='Create new account'/>

        <View style={{margin: 15, marginBottom: 0}}>
            <CustomInput
                value={fullname}
                onChangeText={setFullname}
                placeholder='Full Name'
            />
            <CustomInput
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType='phone-pad'
                placeholder='Phone Number'
            />
            <CustomInput
                value={emailAddress}
                onChangeText={setEmailAddress}
                keyboardType='email-address'
                placeholder='E-mail Address'
            />
            <CustomInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholder='Password'
            />
        </View>

        <View>
            <CustomButton
                title='Sign Up'
                color='#375ba3'
            />
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    }
})

export default SignUpScreen