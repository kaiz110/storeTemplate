import React, { useState } from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
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

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';



const LoginStack = createStackNavigator()
const CheckoutStack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

const Login = () => (
    <LoginStack.Navigator>
        <LoginStack.Screen name='LogIn' component={LogInScreen}/>
        <LoginStack.Screen name='SignIn' component={SignInScreen}/>
        <LoginStack.Screen name='SignUp' component={SignUpScreen}/>
    </LoginStack.Navigator>
)

const CheckoutNav = () => (
    <CheckoutStack.Navigator>
        <CheckoutStack.Screen name='ShoppingBag' component={ShoppingBagScreen}/>
        <CheckoutStack.Screen name='PaymentMethod' component={PaymentMethodScreen}/>
        <CheckoutStack.Screen name='Shipping' component={ShippingScreen}/>
        <CheckoutStack.Screen name='Checkout' component={CheckoutScreen}/>
    </CheckoutStack.Navigator>
)



export default () => {
    const [ isLogin, setIsLogIn ] = useState(false)

    function CustomDrawerContent(props) {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Log Out"
                onPress={() => setIsLogIn(false)}
            />
          </DrawerContentScrollView>
        );
    }

    const DrawerNav = () => (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props}/>} screenOptions={{headerTitleAlign: 'center'}}>
            <Drawer.Screen name='Home' component={HomeScreen}/>
            <Drawer.Screen name='Shop' component={ShopScreen}/>
            <Drawer.Screen name='Bag' component={ShoppingBagScreen}/>
            <Drawer.Screen name='Search' component={SearchScreen}/>
            <Drawer.Screen name='Order' component={OrderScreen}/>
            <Drawer.Screen name='WishList' component={WishListScreen}/>
            <Drawer.Screen name='Profile' component={ProfileScreen}/>
        </Drawer.Navigator>
    )

    return <NavigationContainer>
        {!isLogin
        ? (
            <Stack.Navigator>
                <Stack.Screen name='LogIn' component={LogInScreen}/>
                <Stack.Screen name='SignIn' component={SignInScreen} initialParams={{goto: () => setIsLogIn(true)}}/>
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
        }
        

        
    </NavigationContainer>
}