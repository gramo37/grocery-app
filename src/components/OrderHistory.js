import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { DARKGRAY, GRAY, BLACK, LIGHTGRAY, GREEN, RED } from "../assets/colors/index"

const OrderHistory = ({ data }) => {
    const { products, orderCreatedDate, paymentStatus, totalAmountPaid, orderDeliveryAddress } = data

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.orderDetailsContainer}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: '600' }}>{orderDeliveryAddress}</Text>
                    <Text style={{ fontSize: 15, color: GRAY, fontStyle: 'italic' }}>{orderCreatedDate}</Text>
                </View>
                <View>
                    <Icon name='right' size={20} color={DARKGRAY} />
                </View>
            </View>
            <View style={styles.productsContainer}>
                {/* Show all products here */}
                <Text style={{ fontSize: 16, color: GRAY, fontStyle: 'italic', paddingBottom: 5 }}>All Products</Text>
                <ScrollView horizontal={true} style={styles.products}>
                    {products.map((item) => {
                        return (<View key={item.id} style={styles.imagesContainer}>
                            <Image source={{ uri: item.images[0] }} style={{ ...styles.image, width: 45, height: 45 }} />
                        </View>)
                    })}
                </ScrollView>
            </View>
            <View style={styles.lowerContainer}>
                <View style={styles.flexBox}>
                    <Text style={styles.greyText}>Order Status</Text>
                    <Text style={{ ...styles.blackText, color: `${paymentStatus.toLowerCase() === "success" ? GREEN : RED}` }}>{paymentStatus}</Text>
                </View>
                <View style={styles.flexBox}>
                    <Text style={styles.greyText}>Products</Text>
                    <Text style={styles.blackText}>{products.length} Products</Text>
                </View>
                <View style={styles.flexBox}>
                    <Text style={styles.greyText}>Order Price</Text>
                    <Text style={styles.blackText}>Rs {totalAmountPaid}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default OrderHistory

const styles = StyleSheet.create({
    container: {
        borderColor: LIGHTGRAY,
        borderWidth: 1,
        marginVertical: 2,
        padding: 12,
        marginHorizontal: 15,
        borderRadius: 5
    },
    greyText: {
        color: GRAY,
        fontSize: 14,
        fontWeight: '600'
    },
    blackText: {
        color: BLACK,
        fontWeight: '500',
        fontStyle: 'italic',
        fontSize: 15
    },
    productsContainer: {
        marginVertical: 2,
    },
    products: {
        flexDirection: 'row',
        marginHorizontal: 3
    },
    orderDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flexBox: {
        flexDirection: 'column'
    },
    lowerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imagesContainer: {
        borderRadius: 40,
        padding: 2,
        backgroundColor: LIGHTGRAY,
        marginRight: 4
    },
    image: {
        resizeMode: 'cover',
        borderRadius: 40
    }
})
