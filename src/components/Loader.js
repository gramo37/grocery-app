import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
// import { Bars } from 'react-native-loader';
const loaderImg = require("../assets/images/loader.gif")

const Loader = () => {
  return (
    <View style={styles.container}>
      <Image
            style ={{width: "10%", height:"10%", zIndex: 102}}
            source={require("../assets/images/loader.gif")}
          />
        <Text style={{color: 'white', fontSize: 20, }}>We are working on it. Kindly wait...</Text>
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    position: 'absolute',
    top:0,
    width: '100%',
    height: '100%',
    backgroundColor: 'grey',
    opacity: 0.8
  },
  text: {
    color: 'white',
    textAlign:'center'
  }
})