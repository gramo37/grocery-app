import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from "../../slices/CartSlice"
import { useNavigation } from '@react-navigation/native';
import { calculateTotal } from "../../utils/calculateTotalPrice"

const BasketIcon = () => {
    const cartItems = useSelector(selectCartItems);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigation = useNavigation()

    useEffect(() => {
        setTotalPrice(calculateTotal(cartItems))
    }, [cartItems])

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.innerContainer} onPress={() => navigation.navigate('My Orders')}>
                <Text style={{...styles.text, fontSize: 18, fontWeight: '500', fontStyle: 'italic', backgroundColor: '#01A296', padding: 4}}>{cartItems?.length}</Text>
                <Text style={{...styles.text, fontSize: 20, fontWeight: '600'}}>View Cart</Text>
                <Text style={{...styles.text, fontSize: 18, fontWeight: '500', fontStyle: 'italic'}}>Rs {totalPrice}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 60,
        left: '5%',
        zIndex: 10,
        width: '90%',
        borderWidth: 1,
        paddingVertical: 15,
        backgroundColor: "#00CCBB",
        borderWidth: 0,
        borderRadius: 7,
        opacity: 0.95
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        textAlign: 'center'
    }
})