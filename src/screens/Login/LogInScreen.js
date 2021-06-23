import React from 'react'
import { StyleSheet, SafeAreaView, Image, View } from 'react-native'
import { Text, Button } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LOGIN_TITLE } from '../../constant'

const LogInScreen = ({navigation}) => {
    return <SafeAreaView style={styles.container}>
        <Image
            style={styles.image}
            source={{uri: 'https://toppng.com/uploads/preview/free-fire-png-logo-11569068085c8leiaw15l.png'}}
        />

        <View style={styles.titleContainer}>
            <Text style={styles.title}>{LOGIN_TITLE[0]}</Text>
            <Text style={{fontSize: 14}}>{LOGIN_TITLE[1]}</Text>
            <Text style={{fontSize: 14}}>{LOGIN_TITLE[2]}</Text>
        </View>

        <View style={{marginTop: 15}}>
            <Button
                containerStyle={styles.buttonContainer}
                buttonStyle={styles.button}
                title='Log In'
                onPress={() => navigation.navigate('SignIn')}
            />
            <Button
                containerStyle={styles.buttonContainer}
                buttonStyle={[styles.button, {backgroundColor: 'rgba(0,0,0,0)'}]}
                titleStyle={{color: 'black'}}
                type='outline'
                title='Sign Up'
                onPress={() => navigation.navigate('SignUp')}
            />
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 190,
        height: 190,
        margin: 35,
        alignSelf: 'center'
    },
    titleContainer: {
        marginHorizontal: 25,
        marginVertical: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 24, 
        fontWeight: 'bold',
        marginBottom: 20
    },
    buttonContainer: {
        margin: 15,
        width: '75%',
        alignSelf: 'center',
    },
    button: {
        height: 49,
        backgroundColor: 'black',
        borderRadius: 18,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default LogInScreen