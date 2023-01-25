import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import OrderItem from "./OrderItem";
import Icon from 'react-native-vector-icons/AntDesign';

const OrderHistory = ({ data }) => {
    const [showOrders, setShowOrders] = useState(false)
    const { products, orderCreatedDate, paymentStatus, totalAmountPaid } = data
    return (
        <View style={styles.container(paymentStatus.toLowerCase() === "success" ? "green" : "red")}>
            <View style={styles.upperContainer}>
                <Text style={styles.text}><Text style={{ fontWeight: "bold" }}>Date- </Text><Text style={{ fontStyle: 'italic', fontSize: 13 }}>{orderCreatedDate}</Text></Text>
                <Text style={styles.text}><Text style={{ fontWeight: "bold" }}>Amount-</Text><Text style={{ fontStyle: 'italic', fontSize: 13 }}>Rs {totalAmountPaid}</Text> </Text>
            </View>
            <TouchableOpacity onPress={() => { setShowOrders(!showOrders) }} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', color: 'white', marginVertical: 5, marginHorizontal: 10 }}>{showOrders ? "Hide Products" : "Show Products"}</Text>
                <Icon name={`${showOrders ? "caretup" : "caretdown"}`} size={15} color="#fff" />
            </TouchableOpacity >
            {showOrders && <View>
                {products.map((item) => {
                    return <OrderItem key={item.id} data={item} editable={false} />
                })}
            </View>}
            <Text style={{ ...styles.text, textAlign: 'center', marginVertical: 5 }}>Order {paymentStatus}</Text>
        </View>
    )
}

export default OrderHistory

const styles = StyleSheet.create({
    container: (bgColor) => {
        return ({
            marginVertical: 4,
            // backgroundColor: "#f2f2f2",
            backgroundColor: bgColor,
            padding: 10,
            marginHorizontal: 8,
            borderRadius: 10
        })
    },
    upperContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text: {
        fontSize: 16,
        fontWeight: "400",
        color: 'white'
    }
})