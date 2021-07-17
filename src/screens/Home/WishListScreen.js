import React from 'react'
import { StyleSheet, View, Text, Button, SafeAreaView } from 'react-native'
import ListProduct from '../../component/ListProduct'
import { CLOTHES_DETAIL } from '../../constant'

const WISH_DATA = CLOTHES_DETAIL

const WishListScreen = ({navigation}) => {
    return <SafeAreaView style={{flex: 1}}>
        <ListProduct
            data={WISH_DATA}
        />
    </SafeAreaView>
}

const styles = StyleSheet.create({})

export default WishListScreen