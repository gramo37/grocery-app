import { ScrollView, SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'
import Heading from "../components/Heading"

const Order = () => {
  // Show the current items in cart and proceed to buy option here
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Heading name="Account Details"/>
      <ScrollView>
        <Text>Order Details</Text>
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