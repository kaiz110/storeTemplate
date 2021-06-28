import React,{ useLayoutEffect } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import _ from 'lodash'
import { CLOTHES_DETAIL, SCREEN_WIDTH,CONSTANT_STYLE } from '../../constant'

const ShopDetailScreen = ({navigation, route}) => {
    const headerTitle = route.params?.headerTitle

    useLayoutEffect(() => {
        navigation.setOptions({ headerTitle: _.capitalize(headerTitle) })
    },[navigation])

    const renderItem = ({item}) => {
        return <TouchableOpacity style={styles.container}>
            <Image source={{uri: item.image}} style={styles.image}/>

            <View>
                <Text style={CONSTANT_STYLE.productPrice}>${item.price}</Text>
                <Text style={CONSTANT_STYLE.productName} numberOfLines={1}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    }

    return <View style={{flex: 1}}>
        <FlatList
            data={CLOTHES_DETAIL}
            keyExtractor={data => data.name}
            numColumns={2}
            renderItem={renderItem}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH/2-30,
        height: (SCREEN_WIDTH/2-30) * 1.6,
        borderRadius: 5,
        marginVertical: 20,
        marginLeft: 20
    },
    image: {
        borderRadius: 5, 
        flex: 1
    }
})

export default ShopDetailScreen