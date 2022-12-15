import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    doctorName: {
        color: 'goldenrod',
        fontSize: 20
    }
})

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
            <Text style={styles.doctorName}>{name}</Text>
        </View>
    )
}