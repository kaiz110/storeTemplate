import React,{ useLayoutEffect } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import _ from 'lodash'
import { CLOTHES_DETAIL } from '../../constant'
import ListProduct from '../../component/ListProduct'

const DATA = CLOTHES_DETAIL

const ShopDetailScreen = ({navigation, route}) => {
    const headerTitle = route.params?.headerTitle

    useLayoutEffect(() => {
        navigation.setOptions({ headerTitle: _.capitalize(headerTitle) })
    },[navigation])


    return <SafeAreaView style={{flex: 1}}>
        <ListProduct
            data={DATA}
        />
    </SafeAreaView>
}

const styles = StyleSheet.create({

})

export default ShopDetailScreen