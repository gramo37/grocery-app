import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

const CustomDrawerHeading = ({openMenuOnPress, name}) => {
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer} onPress={openMenuOnPress}>
                <Icon name="bars" size={30} color="blue" />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{name}</Text>
            </View>
        </View>
    )
}

export default CustomDrawerHeading

const styles = {
    container: {
        flexDirection: 'row',
        marginVertical: 5,
        borderColor: 'gray',
        paddingVertical: 5,
        borderBottomWidth: 1,
        marginTop: 50
    },
    buttonContainer: {
        position: 'absolute',
        top:0,
        left: 0,
        margin: 5,
        marginLeft: 10,
        zIndex: 100
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    },
    text: {
        fontSize: 25,
        color: 'black',
        fontStyle: 'bold',
        fontWeight: Platform.OS === 'android' ? 'bold' : '600'
    }
}