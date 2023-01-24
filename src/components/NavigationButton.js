import { TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign';


const NavigationButton = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={styles.container}
        >
            <Icon name="bars" size={30} color="blue" />
        </TouchableOpacity>
    )
}

export default NavigationButton

const styles = {
    container: {
        position: 'absolute',
        top:0,
        left: 0,
        margin: 5,
        marginLeft: 10,
        zIndex: 100
    }
}