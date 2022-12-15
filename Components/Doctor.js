import { View, Text } from 'react-native'
import React from 'react'

export default function Doctor({ doctor }) {
    const { name, email, image } = doctor;
    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}