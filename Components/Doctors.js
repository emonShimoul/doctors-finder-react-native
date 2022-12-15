import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Doctor from './Doctor';

export default function Doctors() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <View>
            <Text>Length: {data.length}</Text>
            <ScrollView>
                {
                    data.map(dt => <Doctor
                        key={dt.id}
                        dt={dt}
                    ></Doctor>)
                }
            </ScrollView>
        </View>
    )
}