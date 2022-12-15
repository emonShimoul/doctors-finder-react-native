import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Doctor from './Doctor';

export default function Doctors() {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <View>
            <Text>This is Doctors: {doctors.length}</Text>
            {
                doctors.map(doctor => <Doctor
                    key={doctor._id}
                    doctor={doctor}
                ></Doctor>)
            }
        </View>
    )
}