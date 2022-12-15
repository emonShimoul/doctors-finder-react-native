import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function Home() {
    return (
        <View>
            <Text>This is a home</Text>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue="You can type in me"
            />
        </View>
    )
}