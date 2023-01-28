import { ScrollView, StyleSheet, Text, StatusBar, View, Button, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems, clearCart } from '../../slices/CartSlice'
import OrderItem from '../components/OrderItem'
import Loader from '../components/Loader'
import { clearOrderStatus, createOrder } from '../../actions/orderAction'
import { createTwoButtonAlert } from '../../utils/createTwoButtonAlert'
import { calculateTotal } from "../../utils/calculateTotalPrice"
import { DARKGRAY, BLACK, GRAY } from '../assets/colors'
import { DrawerContext } from '../MyDrawer';
import { ACCOUNTDETAILS, HOME } from '../assets/screenNames'

const Order = () => {
  const cartItems = useSelector(selectCartItems)
  const [totalPrice, setTotalPrice] = useState(0);
  const orderStatus = useSelector(state => state.order)
  const dispatch = useDispatch()
  const { changeActiveScreen } = useContext(DrawerContext);

  useEffect(() => {
    setTotalPrice(calculateTotal(cartItems))
  }, [cartItems])

  const proceedToBuy = async () => {
    dispatch(createOrder(cartItems)).then(async () => {
      createTwoButtonAlert(orderStatus?.message?.message, "", () => { changeActiveScreen(ACCOUNTDETAILS) })
      await dispatch(clearCart())
      await dispatch(clearOrderStatus)
    }).catch(() => {
      createTwoButtonAlert("Sorry Something went wrong", "", () => { })
    })
  }

  return (
    <>
      {orderStatus?.loading && <Loader />}
      <View>
        <View>
          {cartItems && cartItems?.length === 0 ? <Text style={{ textAlign: 'center' }}>No Items to display</Text> : <><ScrollView style={{ height: '73%' }}>
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
              <Text style={{ color: 'white', fontSize: 16 }}>Place Order</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.continueShoppingbutton} onPress={() => changeActiveScreen(HOME)}>
            <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>Continue Shopping</Text>
          </TouchableOpacity></>}
        </View>
      </View>
    </>
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
  totalPrice: {
    fontSize: 17,
    color: BLACK,
    textAlign: 'center',
    fontWeight: '400'
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