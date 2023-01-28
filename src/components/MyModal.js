import { View, StyleSheet, ScrollView, Text, TouchableOpacity, Animated } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { DARKGRAY, WHITE, BLACK, LIGHTGRAY, GRAY } from "../assets/colors"
import { useSelector } from 'react-redux';
import OrderItem from '../components/OrderItem'
import { selectCartItems } from '../../slices/CartSlice'
import Icon from 'react-native-vector-icons/AntDesign';
import { calculateTotal } from "../../utils/calculateTotalPrice"
import { DrawerContext } from '../MyDrawer';
import { CART } from "../assets/screenNames"

const MyModal = ({ moveUp, closeModalOnPress }) => {
    const cartItems = useSelector(selectCartItems)
    const [totalPrice, setTotalPrice] = useState(0);

    const { changeActiveScreen } = useContext(DrawerContext);

    useEffect(() => {
        setTotalPrice(calculateTotal(cartItems))
    }, [cartItems])

    const proceedToBuy = () => {
        closeModalOnPress()
        changeActiveScreen(CART)
    }

    return (
        <Animated.View style={{ ...styles.container, transform: [{ translateY: moveUp }] }}>
            <TouchableOpacity style={styles.closeIcon}><Icon name="closecircle" size={39} color={BLACK} onPress={closeModalOnPress} /></TouchableOpacity>
            <Text style={styles.text}>Cart Items</Text>
            <ScrollView style={styles.cartItemsContainer}>
                {cartItems?.map((item) => {
                    return <OrderItem key={item.id} data={item} editable={true} />
                })}
            </ScrollView>
            <View style={styles.buttonContainer}>
                <View>
                    <Text style={{ fontSize: 20, color: DARKGRAY }}>Total Payable:</Text>
                    <Text style={{ fontStyle: 'italic', fontSize: 16, textAlign: 'center', color: GRAY }}>Rs {totalPrice}</Text>
                </View>
                <TouchableOpacity style={styles.placeorderButton} onPress={proceedToBuy}>
                    <Text style={{ color: 'white', fontSize: 16 }}>Proceed To Buy</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}

export default MyModal

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        height: '100%',
        width: '100%',
        zIndex: 10,
        backgroundColor: WHITE,
        opacity: 0.95,
        borderTopColor: LIGHTGRAY,
        borderTopWidth: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: '600',
        color: DARKGRAY
    },
    closeIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 15,
        marginHorizontal: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10,
        paddingBottom: 40
    },
    placeorderButton: {
        backgroundColor: BLACK,
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 7
    },
    continueShoppingbutton: {
        backgroundColor: DARKGRAY,
        marginHorizontal: 10,
        padding: 20,
        borderRadius: 7
    }
})