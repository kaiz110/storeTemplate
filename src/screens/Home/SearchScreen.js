import React, { useLayoutEffect, useRef, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity,TextInput } from 'react-native'
import { PRODUCT_IN_BAG,SCREEN_WIDTH } from '../../constant'
import BagHeaderRight from '../../component/BagHeaderRight'
import { Feather } from '@expo/vector-icons'

function SearchTitle () {
    const [val , setVal] = useState('')

    return (
        <View style={{alignItems: 'center', flexDirection: 'row' }}>
            <View>
                <View style={styles.input}>
                    <Feather name='search' size={18} style={{margin: 5}}/>
                    <TextInput 
                        style={{width: SCREEN_WIDTH * 0.5, fontSize: 14}} 
                        placeholder='Search'
                        value={val}
                        onChangeText={setVal}
                        onEndEditing={() => {/* GET_DATA */}}
                    />
                </View>
            </View>            
        </View>
    );
}

const SearchScreen = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({ 
            headerTitle: props => <SearchTitle {...props}/>,
            headerRight: () => (
                <BagHeaderRight num={PRODUCT_IN_BAG} onPress={() => navigation.navigate('CheckoutNav')}/>
            )
        })
    },[navigation])


    return <View>
    </View>
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#e6e6e6',
        flexDirection: 'row', 
        alignItems: 'center', 
        borderRadius: 5
    }
})

export default SearchScreen