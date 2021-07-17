import React, { useState, useLayoutEffect, useCallback } from 'react'
import {
    StyleSheet, View, FlatList, SafeAreaView, Image, TouchableOpacity, Platform
} from 'react-native'
import { Button, Text, Badge } from 'react-native-elements'
import { SHOP_CATEGORY, NEW_ARRIVALS, SCREEN_WIDTH, PRODUCT_IN_BAG, CONSTANT_STYLE } from '../../constant'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel'
import { FontAwesome } from '@expo/vector-icons'
import ProductDetail from '../../component/ProductDetail'
import BagHeaderRight from '../../component/BagHeaderRight'

const HomeScreen = ({ navigation }) => {
    const [ productDetailOverlay, setProductDetailOverlay ] = useState(false)
    const [ currentProduct, setCurrentProduct ] = useState({name: '', price: ''}) 
    const listHeaderComponent = useCallback(() => headerComponent(), [])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <BagHeaderRight num={PRODUCT_IN_BAG} onPress={() => navigation.navigate('CheckoutNav')}/>
            )
        })
    }, [navigation])

    function onImagePress(data) {
        setCurrentProduct(data)
        setProductDetailOverlay(true)
    }

    const renderCategoryList = ({ item }) => (
        <TouchableOpacity style={styles.cateImageWrap} onPress={() => navigation.navigate('ShopDetail', {headerTitle: item.title})}>
            <Image style={styles.cateImage} source={{ uri: item.image }} />

            <View style={styles.cateTextWrap}>
                <Text style={styles.cateText}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )

    const renderNewArrive = ({ item, index }, parallaxProps) => (
        <TouchableOpacity onPress={() => onImagePress({name: item.name, price: item.price})} activeOpacity={0.8}>
            <View style={styles.carouselImageWrap}>
                    <ParallaxImage
                        source={{ uri: item.image }}
                        containerStyle={styles.carouselImage}
                        style={{ ...StyleSheet.absoluteFillObject, resizeMode: 'contain' }}
                        parallaxFactor={0.4}
                        {...parallaxProps}
                    />
                
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>{item.name}</Text>
                    <Text style={{ opacity: 0.6 }}>${item.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

    const renderList = (item, style) => (
        <TouchableOpacity onPress={() => onImagePress({name: item.name, price: item.price})}>
            <Image
                source={{ uri: item.image }}
                style={style}
            />

            <View style={{marginLeft: 10}}>
                <Text style={CONSTANT_STYLE.productPrice}>${item.price}</Text>
                <Text style={CONSTANT_STYLE.productName}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )

    const headerComponent = () => (
        <View>
            <View>
                <FlatList
                    data={SHOP_CATEGORY}
                    keyExtractor={data => data.title}
                    contentContainerStyle={{marginHorizontal: 4}}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    renderItem={renderCategoryList}
                />
            </View>

            <Text style={styles.newArrivals}>New Arrivals</Text>

            <View>
                <Carousel
                    sliderWidth={SCREEN_WIDTH}
                    itemWidth={SCREEN_WIDTH - 120}
                    data={NEW_ARRIVALS}
                    renderItem={renderNewArrive}
                    hasParallaxImages={true}
                />
            </View>

            <Text style={styles.title}>Featured</Text>

            <View>
                <FlatList
                    data={NEW_ARRIVALS}
                    keyExtractor={data => data.name}
                    contentContainerStyle={{marginHorizontal: 7}}
                    horizontal
                    renderItem={({ item }) => renderList(item, styles.featuredImage)}
                />
            </View>

            <Text style={styles.title}>Best Sellers</Text>
        </View>
    )

    return <SafeAreaView style={{flex: 1}}>
        <View>
            <FlatList
                ListHeaderComponent={listHeaderComponent}
                data={NEW_ARRIVALS}
                keyExtractor={data => data.name}
                numColumns={2}
                nestedScrollEnabled
                renderItem={({ item }) => renderList(item, styles.bestSellerImage)}
                ListFooterComponent={() => (
                    <View style={{ margin: 10, marginVertical: 20 }}>
                        <Button
                            title='Browse all'
                            onPress={() => navigation.navigate('Shop')}
                            type='outline'
                            buttonStyle={styles.footerButton}
                            titleStyle={{ color: 'black' }}
                        />
                    </View>
                )}
            />
        </View>

        <ProductDetail
            visible={productDetailOverlay}
            onBack={() => setProductDetailOverlay(false)}
            data={currentProduct}
        />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    cateImageWrap: {
        width: 140,
        height: 60,
        margin: 4,
        marginVertical: 8,
    },
    cateImage: {
        width: '100%',
        height: '100%',
        borderRadius: 7
    },
    cateTextWrap: {
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
    cateText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    //
    newArrivals: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: 15
    },
    carouselImageWrap: {
        width: SCREEN_WIDTH - 120,
        height: (SCREEN_WIDTH - 120) * 1.5
    },
    carouselImage: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 7,
        marginHorizontal: 7,
        elevation: 10
    },
    //
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
    },
    featuredImage: {
        width: 130,
        height: 180,
        marginHorizontal: 7,
        borderRadius: 5
    },
    bestSellerImage: {
        width: SCREEN_WIDTH / 2 - 15,
        height: (SCREEN_WIDTH / 2 - 15) * 1.5,
        marginLeft: 10,
        borderRadius: 5
    },
    footerButton: {
        borderColor: 'black',
        borderWidth: 2
    },
    
})

export default HomeScreen