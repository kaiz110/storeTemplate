import React, { useState, useEffect, useRef } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';
//
import OnBoardScreen from '../screens/OnboardScreen'
import LogInScreen from '../screens/Login/LogInScreen'
import SignInScreen from '../screens/Login/SignInScreen'
import SignUpScreen from '../screens/Login/SignUpScreen'

import HomeScreen from '../screens/Home/HomeScreen'
import OrderScreen from '../screens/Home/OrderScreen'

import SearchScreen from '../screens/Home/SearchScreen'
import ShopDetailScreen from '../screens/Home/ShopDetailScreen'
import ShopScreen from '../screens/Home/ShopScreen'
import WishListScreen from '../screens/Home/WishListScreen'

import CheckoutScreen from '../screens/Checkout/CheckoutScreen'
import PaymentMethodScreen from '../screens/Checkout/PaymentMethodScreen'
import ShippingScreen from '../screens/Checkout/ShippingScreen'
import ShoppingBagScreen from '../screens/Checkout/ShoppingBagScreen'

import ContactUsScreen from '../screens/Profile/ContactUsScreen'
import EditProfileScreen from '../screens/Profile/EditProfileScreen'
import ProfileScreen from '../screens/Profile/ProfileScreen'
import SettingScreen from '../screens/Profile/SettingScreen'
//
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { SCREEN_HEIGHT } from '../constant';



const CheckoutStack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()


const CheckoutNav = () => (
    <CheckoutStack.Navigator screenOptions={{title: '', headerStyle: { elevation: 0 }}}>
        <CheckoutStack.Screen 
            name='ShoppingBag' 
            component={ShoppingBagScreen} 
            options={{title: 'Shopping Bag',headerTitleAlign: 'center'}}
        />
        <CheckoutStack.Screen name='PaymentMethod' component={PaymentMethodScreen}/>
        <CheckoutStack.Screen name='Shipping' component={ShippingScreen}/>
        <CheckoutStack.Screen name='Checkout' component={CheckoutScreen}/>
    </CheckoutStack.Navigator>
)

export default () => {
    const [ isLogin, setIsLogIn ] = useState(false) // replace by token
    const [ firstTime, setFirstTime ] = useState(null)

    useEffect(() => {
        AsyncStorage.getItem('@firstTime').then(val => {
            if(val!=null) setFirstTime(false)
            else setFirstTime(true)
        })
    },[])

    function CustomDrawerContent(props) {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Log Out"
                onPress={() => setIsLogIn(false)}
                labelStyle={styles.label}
                icon={() => <FontAwesome5 style={styles.i} name='sign-out-alt' size={19}/>}
            />  
          </DrawerContentScrollView>
        );
    }

    const DrawerNav = () => (
        <Drawer.Navigator 
            drawerContent={props => <CustomDrawerContent {...props}/>} 
            screenOptions={{
                headerTitleAlign: 'center', 
                drawerType: 'back',
                drawerLabelStyle: styles.label,
                drawerStyle: { paddingTop: SCREEN_HEIGHT/7 },
            }} 
        >
            <Drawer.Screen name='Home' component={HomeScreen} 
                options={{drawerIcon: () => <FontAwesome5 style={styles.i} name='store-alt' size={15}/>}}
            />
            <Drawer.Screen name='Shop' component={ShopScreen} 
                options={{drawerIcon: () => <AntDesign style={styles.i} name='appstore1' size={18}/>}}
            />
            <Drawer.Screen name='Bag' component={ShoppingBagScreen} 
                options={{drawerIcon: () => <FontAwesome style={styles.i} name='shopping-bag' size={17}/>}}
            />
            <Drawer.Screen name='Search' component={SearchScreen} 
                options={{drawerIcon: () => <FontAwesome5 style={styles.i} name='search' size={18}/>}}
            />
            <Drawer.Screen name='Order' component={OrderScreen} 
                options={{drawerIcon: () => <FontAwesome5 style={styles.i} name='truck' size={16}/>}}
            />
            <Drawer.Screen name='WishList' component={WishListScreen} 
                options={{drawerIcon: () => <AntDesign style={styles.i} name='heart' size={17}/>}}
            />
            <Drawer.Screen name='Profile' component={ProfileScreen} 
                options={{drawerIcon: () => <FontAwesome5 style={styles.i} name='user-alt' size={17}/>}}
            />
        </Drawer.Navigator>
    )

    return <NavigationContainer>
        {firstTime!== null ? !isLogin
        ? (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {firstTime &&
                <Stack.Screen name='OnBoard' component={OnBoardScreen}/>}
                <Stack.Screen name='LogIn' component={LogInScreen}/>
                <Stack.Screen name='SignIn' component={SignInScreen} initialParams={{goto: () => setIsLogIn(true)}}/>{/* remove init */}
                <Stack.Screen name='SignUp' component={SignUpScreen}/>
            </Stack.Navigator>
          )
        : (
            <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
                <Stack.Screen name='DrawerNav' component={DrawerNav} options={{headerShown: false}}/>

                <Stack.Screen name='CheckoutNav' component={CheckoutNav} options={{headerShown: false}}/>

                <Stack.Screen name='ShopDetail' component={ShopDetailScreen}/>
                <Stack.Screen name='EditProfile' component={EditProfileScreen}/>
                <Stack.Screen name='ContactUs' component={ContactUsScreen}/>
                <Stack.Screen name='Setting' component={SettingScreen}/>
            </Stack.Navigator>
          )
        : <View/>
        }
        

        
    </NavigationContainer>
}

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold', 
        fontSize: 15, 
        marginLeft: 10
    },
    i: {
        position: 'absolute',
        left: 10,
    }
})