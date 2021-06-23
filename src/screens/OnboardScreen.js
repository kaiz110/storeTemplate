import React, { useState } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Button } from 'react-native-elements'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SCREEN_HEIGHT, SCREEN_WIDTH, WELCOME_IMAGES } from '../constant'

const OnBoardScreen = ({navigation}) => {
    const [ activeSlide, setActiveSlide ] = useState(0)

    const renderItem = ({item, index}, parallaxProps) => {
        return (
          <View style={styles.item}>
            <Image
                style={styles.image}
                source={{uri: item}}
            />
            {index === WELCOME_IMAGES.length - 1 &&
                <Button
                    containerStyle={styles.buttonContainer}
                    buttonStyle={styles.button}
                    title='CONTINUE'
                    onPress={async () => {
                        try{
                            await AsyncStorage.setItem('@firstTime', 'true')
                            navigation.reset({index: 0, routes: [{name: 'LogIn'}]})
                        }catch (e) {console.log('error', e)}
                    }}
                />
            }
          </View>
        );
    };

    return <View style={{flex: 1}}>
        <Carousel
            sliderWidth={SCREEN_WIDTH}
            itemWidth={SCREEN_WIDTH}
            slideStyle={{flex: 1}}
            containerCustomStyle={{flex: 1}}
            onSnapToItem={index => setActiveSlide(index)}
            data={WELCOME_IMAGES}
            renderItem={renderItem}
        />
        <Pagination
              dotsLength={WELCOME_IMAGES.length}
              activeDotIndex={activeSlide}
              containerStyle={styles.pagination}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'rgba(255, 255, 255, 0.92)'
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
    </View>
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute', 
        top: SCREEN_HEIGHT * 0.65 , 
        width: '90%', 
        alignSelf: 'center'
    },
    button: {
        height: 55, 
        borderRadius: 5, 
        backgroundColor: 'black'
    },
    item: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        height: SCREEN_HEIGHT,
    },
    title: {
        fontSize: 16
    },
    pagination: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center'
    }
})

export default OnBoardScreen