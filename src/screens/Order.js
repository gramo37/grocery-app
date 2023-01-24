import { ScrollView, SafeAreaView, StyleSheet, Text, StatusBar, View } from 'react-native'
import React, { useEffect } from 'react'
import Heading from "../components/Heading"
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../slices/CartSlice'
import OrderItem from '../components/OrderItem'

const Order = () => {
  // Show the current items in cart and proceed to buy option here
  const cartItems = useSelector(selectCartItems)
  useEffect(() => {
    console.log(cartItems)
  }, [cartItems])

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Heading name="Order Details" />
      <ScrollView>
        {cartItems.length === 0 ? <Text>No Items to display</Text> : <View>
          {cartItems.map((item) => {
            return <OrderItem key={item.id} data={item} />
          })}
        </View>}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Order

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
})