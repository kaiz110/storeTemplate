import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Badge } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons'

const BagHeaderRight = ({onPress, num}) => (
    <TouchableOpacity style={styles.bagIcon} onPress={onPress}>
        <FontAwesome name='shopping-bag' size={25} />
        { num > 0 &&
            <Badge status='error' value={num}
                containerStyle={styles.bagIconBadge}
            />
        }
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    bagIcon: {
        padding: 7,
        marginRight: 5
    },
    bagIconBadge: {
        position: 'absolute', 
        top: 0, 
        right: 0
    },
})

export default BagHeaderRight