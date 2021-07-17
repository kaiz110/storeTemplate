import React from 'react'
import { StyleSheet, TouchableOpacity, Text, Image, View, FlatList } from 'react-native'
import { CONSTANT_STYLE, SCREEN_WIDTH } from '../constant'

const ListProduct = ({data}) => {

    const renderItem = ({item}) => {
        return <TouchableOpacity style={styles.container}>
            <Image source={{uri: item.image}} style={styles.image}/>

            <View>
                <Text style={CONSTANT_STYLE.productPrice}>${item.price}</Text>
                <Text style={CONSTANT_STYLE.productName} numberOfLines={1}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    }

    return (
        <FlatList
            data={data}
            keyExtractor={data => data.name}
            numColumns={2}
            renderItem={renderItem}
        />
    )
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

export default ListProduct