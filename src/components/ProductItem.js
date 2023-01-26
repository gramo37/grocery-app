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
                    <Text numberOfLines={1} style={{flexWrap: 'wrap', flex: 1}}>{data?.title?.length < 20 ? `${data?.title}` : `${data?.title?.substring(0, 20)}...`}</Text>
                    <Text numberOfLines={1} style={{flexWrap: 'wrap', flex: 1, fontStyle: 'italic', color: '#858585'}}>{data?.brand?.length < 18 ? `${data?.brand}` : `${data?.brand?.substring(0, 18)}...`}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>Rs {data.price}</Text>
                    {/* <TouchableOpacity onPress={() => addItemToCart({ id, title, price, description, images, quantity: 1 })}><Text>Add To Cart</Text></TouchableOpacity> */}
                    <Icon style={styles.addToKart} name="shoppingcart" size={25} color="#000" onPress={() => addItemToCart({ id, title, price, description, images, quantity: 1 })} />
                </View>
            </View>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        width: '47%',
        margin: 2,
        marginVertical: 6,
        backgroundColor: '#fafafa',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#e3e3e3'
    },
    price: {
        color: 'gray',
        fontStyle: 'italic'
    },
    descriptionContainer: {
        flexWrap: 'wrap',
        flexDirection: 'column',
        width: '100%'
    },
    priceContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 7,
        paddingHorizontal: 4
    },
    upperContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        alignItems: 'center'
    },
    lowerContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 5,
        marginTop: 3
    },
    image: {
        width: '95%',
        height: 180,
        margin: 3,
        resizeMode: 'contain',
    },
    addToKart: {
        bottom: 0,
        right: 0,
        margin: 3,
        zIndex: 10
    }
})