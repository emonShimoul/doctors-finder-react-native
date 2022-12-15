import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Doctor({ dt }) {
    const { name, email } = dt;
    return (
        <View>
            <Image
                source={{
                    uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                }}
                style={{ width: 200, height: 200 }}
            />
            <Text>{name}</Text>
        </View>
    )
}