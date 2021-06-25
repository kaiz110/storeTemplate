import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Button, Text, Overlay, Divider } from 'react-native-elements'
import { NEW_ARRIVALS, SCREEN_WIDTH } from '../constant'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { FontAwesome, FontAwesome5, EvilIcons, SimpleLineIcons, Feather } from '@expo/vector-icons'

const SizeMock = ['S', 'M', 'L', 'XL']
const ColorMock = ['green', 'blue', 'white']
const ImageArray = NEW_ARRIVALS
const HeartMock = false

const ProductDetail = ({visible, onBack, data}) => {
    const [ slideIndex, setSlideIndex ] = useState(0)
    const [ size, setSize ] = useState('')
    const [ color, setColor ] = useState()

    const renderProductImage = ({item}) => (
        <View style={{flex: 1}}>
            <Image source={{uri: item.image}} style={{flex: 1}}/>
        </View>
    )

    const chooseSize = () => {
        return <View>
            {SizeMock.map(val => {
                const bg = val === size ? 'black' : 'white'
                const c = val === size ? 'white' : 'black'

                return (
                    <TouchableOpacity key={val} 
                        style={[styles.olChoose, {backgroundColor: bg}]} 
                        onPress={() => setSize(val)}
                    >
                        <Text style={{fontWeight: 'bold', color: c, fontSize: 12}}>{val}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    }

    const chooseColor = () => {
        return <View>
            {ColorMock.map(val => (
                <TouchableOpacity key={val} 
                    style={[styles.olChoose, {backgroundColor: val}]} 
                    onPress={() => setColor(val)}
                >
                    {val === color &&
                        <Feather style={styles.iconColor} name='check' color='white' size={15}/>
                    }
                </TouchableOpacity>
            ))}
        </View>
    }

    return <Overlay
        animationType='slide' 
        isVisible={visible} 
        onBackdropPress={onBack}
    >
        <View style={styles.overlayContainer}>
            <View style={{flex: 3,backgroundColor: 'lightgrey'}}>
                <Carousel
                    data={ImageArray}
                    onSnapToItem={index => setSlideIndex(index)}
                    sliderWidth={SCREEN_WIDTH}
                    itemWidth={SCREEN_WIDTH}
                    renderItem={renderProductImage}
                />

                <Pagination
                    dotsLength={ImageArray.length}
                    activeDotIndex={slideIndex}
                    containerStyle={{position: 'absolute', bottom: 0, alignSelf: 'center'}}
                    dotStyle={styles.paginationDot}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={1}
                />

                <TouchableOpacity style={styles.olBack} onPress={onBack}>
                    <EvilIcons name='chevron-down' size={50}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.olShare}>
                    <SimpleLineIcons name='share' size={22}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.olHeart}>
                    <FontAwesome name={HeartMock ? 'heart' : 'heart-o'} size={19} color='lightpink'/>
                </TouchableOpacity>

                <View style={styles.bottomRightContainer}>
                    {chooseSize()}
                    {chooseColor()}
                </View>
            </View>

            <View style={{flex: 1}}>
                <View style={{margin: 10}}>
                    <Text style={styles.overlayName}>{data.name}</Text>
                    <Text style={styles.overlayPrice}>${data.price}</Text>
                </View>

                <Divider style={{marginVertical: 5}}/>

                <View style={styles.overlayButtonContainer}>
                    <Button
                        buttonStyle={styles.buttonAddToBag}
                        title='ADD TO BAG'
                    />
                    <Button
                        buttonStyle={styles.buttonApplePay}
                        titleStyle={{color: 'black'}}
                        type="outline"
                        icon={<FontAwesome5 name='apple-pay' size={30}/>}
                    />
                </View>
            </View>
        </View>
    </Overlay>
}

const styles = StyleSheet.create({
    overlayContainer: {
        width: SCREEN_WIDTH, 
        flex: 1
    },
    olBack: {
        position: 'absolute',
        top: 0
    },
    olShare: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    olHeart: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        padding: 7,
        backgroundColor: 'white',
        borderRadius: 25
    },
    bottomRightContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 25,
        right: 0
    },
    olChoose: {
        width: 25,
        height: 25, 
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        margin: 6,
    },
    iconColor: {
        backgroundColor: 'rgba(0,0,0,0.2)', 
        borderRadius: 10, 
        padding: 1
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 5,
        margin: -3,
        backgroundColor: 'rgba(255, 255, 255, 0.92)'
    },
    overlayName: {
        fontSize: 17,
        fontWeight: 'bold',
        margin: 2
    },
    overlayPrice: {
        margin: 2,
        fontSize: 16,
        opacity: 0.6
    },
    overlayButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10
    },
    buttonAddToBag: {
        width: SCREEN_WIDTH/2 - 10, 
        backgroundColor: 'black',
        height: 52
    },
    buttonApplePay: {
        width: SCREEN_WIDTH/2 - 10, 
        borderWidth: 2,
        borderColor: 'black',
    }
})

export default ProductDetail