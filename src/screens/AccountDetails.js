import { ScrollView, SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native'
import React from 'react'
import Heading from "../components/Heading"

const AccountDetails = () => {
  // Show Customer details and previous orders here
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Heading name="Account Details"/>
      <ScrollView>
        <Text>Account Details</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AccountDetails

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
})