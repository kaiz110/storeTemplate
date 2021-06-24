import React from 'react'
import { StyleSheet, SafeAreaView, Image, View, StatusBar } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { LOGIN_TITLE } from '../../constant'
import CustomButton from '../../component/CustomButton'

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
            <CustomButton
                title='Log In'
                onPress={() => navigation.navigate('SignIn')}
            />
            <CustomButton
                title='Sign Up'
                onPress={() => navigation.navigate('SignUp')}
                type='outline'
            />
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    image: {
        width: 190,
        height: 190,
        margin: 25,
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
})

export default LogInScreen