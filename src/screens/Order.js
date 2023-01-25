import { ScrollView, SafeAreaView, StyleSheet, Text, StatusBar, View, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import Heading from "../components/Heading"
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems, clearCart } from '../../slices/CartSlice'
import OrderItem from '../components/OrderItem'
import { useNavigation } from '@react-navigation/native'
import Loader from '../components/Loader'
import { clearOrderStatus, createOrder } from '../../actions/orderAction'
import { createTwoButtonAlert } from '../../utils/createTwoButtonAlert'

const Order = () => {
  // Show the current items in cart and proceed to buy option here
  const cartItems = useSelector(selectCartItems)
  const [totalPrice, setTotalPrice] = useState(0);
  const orderStatus = useSelector(state => state.order)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  useEffect(() => {
    calculateTotal()
  }, [cartItems])

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, curr) => {
      return acc + curr.quantity * curr.price;
    }, 0)
    setTotalPrice(total)
  }

  useEffect(() => {
    console.log("orderStatus", orderStatus, "orderStatus")
    // Set an alert for successful order
    if (orderStatus.loading) return
    if (orderStatus.error !== "" && orderStatus.error !== undefined && orderStatus.error !== null) {
      createTwoButtonAlert("Opps! Something went wrong", "", () => {  })
      return
    }
    if (orderStatus?.message?.success) {
      createTwoButtonAlert("Order Placed Successfully", "", () => { navigation.navigate('Account Details') })
      // Clear the cart
      dispatch(clearCart())
      dispatch(clearOrderStatus)
      return
    }
    
  }, [orderStatus])


  const proceedToBuy = async () => {
    await dispatch(createOrder(cartItems))

  }

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Heading name="Cart Details" />
      <ScrollView>
        {cartItems && cartItems?.length === 0 ? <Text>No Items to display</Text> : <View>
          {cartItems?.map((item) => {
            return <OrderItem key={item.id} data={item} editable={true}/>
          })}
          <View style={styles.totalPriceContainer}>
            <Text style={styles.totalPrice}>Total Payable: <Text style={{ fontStyle: 'italic', fontSize: 20 }}>Rs {totalPrice}</Text></Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button title='Continue Shopping' onPress={() => navigation.navigate('Home')} />
            {/* Send Order to API */}
            <Button title='Proceed to Buy' onPress={proceedToBuy} />
          </View>
        </View>}
      </ScrollView>
      {orderStatus?.loading && <Loader />}
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
    marginHorizontal: 6,
    borderRadius: 12
  },
  totalPrice: {
    fontSize: 17,
    color: '#3d3d3d',
    textAlign: 'center',
    fontWeight: '400'
  }
})