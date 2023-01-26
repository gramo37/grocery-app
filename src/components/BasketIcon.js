import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { selectCartItems } from "../../slices/CartSlice"
import { calculateTotal } from "../../utils/calculateTotalPrice"
import MyModal from './MyModal';

const BasketIcon = () => {
    const cartItems = useSelector(selectCartItems);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showModal, setShowModal] = useState(false)
    const moveUp = useRef(new Animated.Value(1000)).current

    useEffect(() => {
        setTotalPrice(calculateTotal(cartItems))
    }, [cartItems])

    useEffect(() => {
        setShowModal(false)
    }, [])

    const closeModalOnPress = () => {
        Animated.timing(moveUp, {
            toValue: showModal ? 1000 : 0,
            duration: 300,
            useNativeDriver: true
        }).start()
        setShowModal(!showModal)
    }

    return (
        <>
            <MyModal closeModal={closeModalOnPress} closeModalOnPress={closeModalOnPress} moveUp={moveUp} />
            <View style={styles.container}>
                <TouchableOpacity style={styles.innerContainer} onPress={closeModalOnPress}>
                    <Text style={{ ...styles.text, fontSize: 18, fontWeight: '500', fontStyle: 'italic', backgroundColor: '#01A296', padding: 4 }}>{cartItems?.length}</Text>
                    <Text style={{ ...styles.text, fontSize: 20, fontWeight: '600' }}>View Cart</Text>
                    <Text style={{ ...styles.text, fontSize: 18, fontWeight: '500', fontStyle: 'italic' }}>Rs {totalPrice}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default BasketIcon

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 60,
        left: '5%',
        zIndex: 9,
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