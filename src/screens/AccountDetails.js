import { ScrollView, StyleSheet, Text, StatusBar, View, Image } from 'react-native'
import React from 'react'
import OrderHistory from '../components/OrderHistory'

const AccountDetails = () => {
  const { orders } = require("../data/orders.json")
  const { name, profileImage, address } = require("../data/customer.json")

  return (
    <View>
      {/* Display Customer Details */}
      <View style={styles.customerDetailsContainer}>
        <Image style={styles.image} source={{ uri: profileImage, width: 70, height: 70 }} />
        <View style={{ marginVertical: 10 }}>
          <Text style={{ textAlign: 'center', fontSize: 20, fontStyle: 'normal', fontWeight: "500" }}>{name}</Text>
          <Text style={{ textAlign: 'center', fontStyle: 'italic', fontSize: 18, color: 'grey' }}>{address}</Text>
        </View>
      </View>
      {/* Display Order Details */}
      <View><Text style={{ textAlign: 'center', fontSize: 28, fontWeight: '700' }}>Previous Orders</Text></View>
      <ScrollView style={styles.ordersContainer}>
        <View>
          {orders.length !== 0 && <View>
            {orders.map((item) => {
              return <OrderHistory data={item} key={item.id} />
            })}
          </View>}
        </View>
      </ScrollView>
    </View>
  )
}

export default AccountDetails

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  customerDetailsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    borderRadius: 100
  },
  ordersContainer: {
    marginTop: 5,
    height: '64%'
  }
})