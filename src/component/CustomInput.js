import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Input } from 'react-native-elements'

const CustomInput = ({placeholder, value, onChangeText, secureTextEntry, keyboardType}) => {
    return <View>
        <Input
            keyboardType={keyboardType || 'default'}
            inputContainerStyle={styles.input}
            inputStyle={{fontSize: 16}}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
        />
    </View>
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderRadius: 25,
        paddingVertical: 0,
        paddingHorizontal: 17
    },
})

export default CustomInput