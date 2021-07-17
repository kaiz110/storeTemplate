import React, { useLayoutEffect} from 'react'
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Image } from 'react-native'
import { SCREEN_WIDTH, SHOP_CATEGORY } from '../../constant'
import BagHeaderRight from '../../component/BagHeaderRight'
import { PRODUCT_IN_BAG } from '../../constant'

const ShopScreen = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <BagHeaderRight num={PRODUCT_IN_BAG} onPress={() => navigation.navigate('CheckoutNav')}/>
            )
        })
    }, [navigation])

    const renderList = ({item}) => (
        <TouchableOpacity style={styles.cardWrap} onPress={() => navigation.navigate('ShopDetail', {headerTitle: item.title})}>
            <Image style={{flex: 1,borderRadius: 6}} source={{uri: item.image}}/>

            <View style={styles.textWrap}>
                <Text style={styles.text}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )

    return <View style={{flex: 1}}>
        <FlatList
            data={SHOP_CATEGORY}
            keyExtractor={data => data.title}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingTop: 10}}
            renderItem={renderList}
        />
    </View>
}

const styles = StyleSheet.create({
    cardWrap: {
        width: SCREEN_WIDTH - 20, 
        height: 90,
        margin: 10,
        marginTop: 0
    },
    textWrap: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.45)',
        borderRadius: 7
    },
    text: {

        fontWeight: 'bold',
        color: 'white'
    }
})

export default ShopScreen