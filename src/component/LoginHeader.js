import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { SCREEN_HEIGHT } from '../constant'

const LoginHeader = ({title}) => {
    const navigation = useNavigation()

    return <View>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name='chevron-left' size={35}/>
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>
    </View>
}

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        left: 0,
        top: 15,
        padding: 3
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: SCREEN_HEIGHT * 0.1,
        marginBottom: 25,
        marginLeft: 15,
    },
})

export default LoginHeader