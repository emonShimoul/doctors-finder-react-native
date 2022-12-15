import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'

export default function Home() {
    return (
        <View>
            <Text>This is a home</Text>
            <Button
                onPress={() => {
                    alert('You tapped the button!');
                }}
                title="Press Me"
                color="#841584"
            />
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