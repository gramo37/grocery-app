import { View, StyleSheet, Platform, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'
import SearchBar from "../components/SearchBar"
import ProductItem from '../components/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from "../../slices/CartSlice"
import BasketIcon from '../components/BasketIcon';
import { createTwoButtonAlert } from '../../utils/createTwoButtonAlert';

const Home = () => {
    const [value, setValue] = useState("");
    const { products } = require("../data/products.json")
    const [showProducts, setShowProducts] = useState(products)
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const Search = (products, text) => {
        return products.filter(item => { return (item.title.toLowerCase().includes(text.toLowerCase()) || item.category.toLowerCase().includes(text.toLowerCase())) });
    }

    const onChangeHandler = (text) => {
        setValue(text)
        if (text == "") {
            setShowProducts(products)
            return
        }
        setShowProducts(Search(products, text));
    }

    const addItemToCart = (data) => {
        dispatch(addToCart(data))
        createTwoButtonAlert("Item Added Successfully", `${data.title} added to cart`, () => { console.log("Success") })
    }

    return (
        <View>
            {cartItems?.length !== 0 && <BasketIcon />}
            <View style={styles.headerContainer}>
                <SearchBar value={value} onChangeHandler={onChangeHandler} />
            </View>
            <ScrollView style={{ height: '80%' }} showsVerticalScrollIndicator={false}>
                <View style={styles.productsContainer}>
                    {/* Show All Products */}
                    {showProducts.map((item) => {
                        return <ProductItem data={item} key={item.id} addItemToCart={addItemToCart} />
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 7
    },
    productsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginHorizontal: 4
    }
})