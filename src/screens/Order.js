import { ScrollView, SafeAreaView, StyleSheet, Text, StatusBar, View, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import Heading from "../components/Heading"
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../slices/CartSlice'
import OrderItem from '../components/OrderItem'
import { useNavigation } from '@react-navigation/native'
import { getFromLocalStorage } from '../../utils/storeAsyncStorage'

const Order = () => {
  // Show the current items in cart and proceed to buy option here
  const cartItems = useSelector(selectCartItems)
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calculateTotal()
  }, [cartItems])

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, curr) => {
      return acc + curr.quantity * curr.price;
    }, 0)
    setTotalPrice(total)
  }

  const proceedToBuy = () => {
    console.log(cartItems)
    console.log("Hello")
  }

  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Heading name="Cart Details" />
      <ScrollView>
        {cartItems && cartItems?.length === 0 ? <Text>No Items to display</Text> : <View>
          {cartItems?.map((item) => {
            return <OrderItem key={item.id} data={item} />
          })}
          <View style={styles.totalPriceContainer}>
            <Text style={styles.totalPrice}>Total: <Text style={{fontStyle: 'italic', fontSize: 28}}>Rs {totalPrice}</Text></Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button title='Continue Shopping' onPress={() => navigation.navigate('Home')} />
            {/* Send Order to API */}
            <Button title='Proceed to Buy' onPress={proceedToBuy}/>
          </View>
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
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10
  },
  totalPriceContainer: {
    backgroundColor: '#ededed',
    padding: 5,
  },
  totalPrice: {
    fontSize: 25,
    color: '#3d3d3d',
    textAlign: 'center',
    fontWeight: '400'
  }
})