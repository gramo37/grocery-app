import { View, TextInput,Text, SafeAreaView, StyleSheet, Platform, StatusBar, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import SearchBar from "../components/SearchBar"
import ProductItem from '../components/ProductItem';
import Heading from '../components/Heading';

const Home = () => {

  const navigation = useNavigation();
    const [value, setValue] = useState("");
    const {products} = require("../data/products.json")
    const [showProducts, setShowProducts] = useState(products)

    const Search = (products, text) => {
        return products.filter(item => {return (item.title.toLowerCase().includes(text.toLowerCase()) || item.category.toLowerCase().includes(text.toLowerCase()))});
    }

    const onChangeHandler = (text) => {
        setValue(text)
        if(text == "") {
            setShowProducts(products)
            return
        }
        setShowProducts(Search(products, text));
    }


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Heading name="Home"/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <SearchBar value={value} onChangeHandler={onChangeHandler} />
        </View>
        <View style={styles.productsContainer}>
          {/* Show All Products */}
          {showProducts.map((item) => {
            return <ProductItem data={item} key={item.id} />
          })}
        </View>
      </ScrollView>
      </SafeAreaView>
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