import { View, Text, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react'

const ProductItem = ({ data, addItemToCart }) => {
    const { id, title, price, description, images } = data;
    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}><Image style={styles.image} source={{ uri: data.images[0] }} /></View>
            <View style={styles.lowerContainer}>
                <View style={styles.descriptionContainer}>
                    <Text>{data.title}</Text>
                    <Text style={styles.price}>Rs {data.price}</Text>
                </View>
            </View>
            <Icon style={styles.addToKart} name="shoppingcart" size={25} color="#000" onPress={() => addItemToCart({ id, title, price, description, images, quantity: 1 })} />
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        width: '47%',
        height: 300,
        margin: 2,
        marginVertical: 6,
        backgroundColor: '#fafafa',
        borderRadius: 9,
        paddingHorizontal: 2
    },
    price: {
        color: 'gray',
        fontStyle: 'italic'
    },
    descriptionContainer: {
        flexDirection: 'column',
        paddingHorizontal: 4,
        paddingVertical: 10
    },
    upperContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 35
    },
    lowerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '95%',
        height: 180,
        margin: 3,
        resizeMode: 'contain'
    },
    addToKart: {
        position: 'absolute',
        right: 0,
        margin: 3,
        zIndex: 10
    }
})