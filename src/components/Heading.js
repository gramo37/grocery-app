import { View, Text, Platform } from 'react-native'
import React from 'react'

import NavigationButton from './NavigationButton';

const Heading = ({ name }) => {

    return (
        <View style={styles.container}>
        <NavigationButton />
        <View style={styles.textContainer}>
            <Text style={styles.text}>{name}</Text>
        </View>
        </View>
    )
}

export default Heading

const styles = {
    container: {
        flexDirection: 'row',
        marginVertical: 5,
        borderColor: 'gray',
        paddingVertical: 5,
        borderBottomWidth: 1
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    },
    text: {
        fontSize: 25,
        color: 'gray',
        fontStyle: 'bold',
        fontWeight: Platform.OS === 'android' ? 'bold' : '500'
    }
}