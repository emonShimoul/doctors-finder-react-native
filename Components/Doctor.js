import { View, Text } from 'react-native'
import React from 'react'

export default function Doctor({ dt }) {
    const { id, title } = dt;
    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}