import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from "../../slices/CartSlice"
import {BLACK, BLUE, DARKGRAY, GRAY, VERYLIGHTGRAY, WHITE} from "../assets/colors/index"

const OrderItem = ({ data, editable }) => {
  const dispatch = useDispatch();

  const addItemToCart = (data) => {
    dispatch(addToCart(data))
  }

  const removeItemToCart = (data) => {
    dispatch(removeFromCart(data))
  }

  const { id, title, price, description, images, quantity } = data;
  
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image style={styles.image} source={{ uri: images[0], width: 100, height: 100 }} />
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.descriptionContainer}>
          <Text style={{fontSize: 20, color: BLACK, fontWeight: '600'}}>{title}</Text>
          <Text style={{fontSize: 15, color: GRAY, fontWeight: '400', fontStyle: 'italic'}}>Rs {price}</Text>
        {editable && <View style={styles.quantityContainer}>
          <Icon style={styles.quantityItem} name="minuscircle" size={33} color={BLACK} onPress={() => removeItemToCart({ id, title, price, description, images, quantity: 1 })} />
          <Text style={{...styles.quantityItem, fontSize: 15}}>{quantity}</Text>
          <Icon style={styles.quantityItem} name="pluscircle" size={33} color={BLACK} onPress={() => addItemToCart({ id, title, price, description, images, quantity: 1 })} />
        </View>}
        </View>
      </View>
    </View>
  )
}

export default OrderItem

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 6,
    marginVertical: 4,
    backgroundColor: WHITE,
    padding: 3,
    paddingVertical: 7,
    flexWrap: 'wrap',
    backgroundColor: VERYLIGHTGRAY,
    marginHorizontal: 10,
    borderRadius: 5
  },
  image: {
    marginRight: 4
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  descriptionContainer: {
    width: '81%'
  },
  quantityContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  quantityItem: {
    marginHorizontal: 2,
    marginVertical: 6
  }
}