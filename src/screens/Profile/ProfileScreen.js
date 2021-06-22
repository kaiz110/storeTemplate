import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const ProfileScreen = ({navigation}) => {
    return <View>
        <Text>ProfileScreen</Text>
        <Button
            title='Go to Edit Profile'
            onPress={() => navigation.navigate('EditProfile')}
        />
        <Button
            title='Go to Contact Us'
            onPress={() => navigation.navigate('ContactUs')}
        />
        <Button
            title='Go to Setting'
            onPress={() => navigation.navigate('Setting')}
        />
    </View>
}

const styles = StyleSheet.create({})

export default ProfileScreen