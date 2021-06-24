import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'

// type outline || solid
const CustomButton = ({title, onPress, type, color}) => {
    const styles = StyleSheet.create({
        buttonContainer: {
            margin: 15,
            width: '75%',
            alignSelf: 'center',
        },
        button: {
            height: 45,
            backgroundColor: color ||'black',
            borderRadius: 20,
            borderColor: color || 'black',
            borderWidth: 1
        }
    })

    return <View>
        <Button
            containerStyle={styles.buttonContainer}
            buttonStyle={[styles.button, type === 'outline' ? {backgroundColor: 'rgba(0,0,0,0)'} : null] }
            titleStyle={[{fontSize: 17},type === 'outline' ? {color: color || 'black'} : null]}
            type={type || 'solid'}
            title={title}
            onPress={onPress}
        />
    </View>
}

export default CustomButton