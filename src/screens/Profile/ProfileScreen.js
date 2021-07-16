import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { Avatar, ListItem, Icon, Button } from 'react-native-elements'
import { CommonActions } from '@react-navigation/native'

const ProfileScreen = ({navigation}) => {

    const list = [
        {
            title: 'Account Details',
            icon: 'battery-alert',
            press: () => navigation.navigate('EditProfile')
        },
        {
            title: 'Wishlist',
            icon: 'battery-alert',
            press: () => navigation.navigate('WishList')
        },
        {
            title: 'Order History',
            icon: 'battery-alert',
            press: () => navigation.navigate('Order')
        },
        {
            title: 'Setting',
            icon: 'battery-alert',
            press: () => navigation.navigate('Setting')
        },
        {
            title: 'Contact Us',
            icon: 'battery-alert',
            press: () => navigation.navigate('ContactUs')
        }
    ]

    return <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
           <Avatar
                size='xlarge'
                title='K'
                rounded
                containerStyle={{backgroundColor: 'grey'}}
            />
            <Text style={styles.headName}>Kaiz</Text> 
        </View>

        {list.map((val, i) => {
            return (
                <ListItem key={i} onPress={val.press}>
                    <Icon name={val.icon}/>
                    <ListItem.Content>
                        <ListItem.Title>{val.title}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron/>
                </ListItem>
            )
        })}

        <View style={{margin: 15, marginTop: 45}}>
            <Button
                title='Logout'
                type='outline'
                buttonStyle={styles.logout}
                titleStyle={{color: 'grey'}}
                onPress={() => {}} // LOGOUT HERE
            />
        </View>

    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    headerContainer: {
        alignItems: 'center', 
        margin: 10
    },
    headName: {
        margin: 20, 
        fontSize: 20, 
        fontWeight: 'bold'
    },
    logout: {
        borderWidth: 1,
        borderColor: 'grey', 
    }
})

export default ProfileScreen