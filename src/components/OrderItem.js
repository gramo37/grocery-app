import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from "../../slices/CartSlice"
import { createTwoButtonAlert } from '../../utils/createTwoButtonAlert';

const OrderItem = ({ data, editable }) => {
  const dispatch = useDispatch();

  const addItemToCart = (data) => {
    dispatch(addToCart(data))
    // createTwoButtonAlert("Item Added Successfully", `${data.title} added to cart`, ()=>{console.log("Success")})
  }

  const removeItemToCart = (data) => {
    dispatch(removeFromCart(data))
    // createTwoButtonAlert("Item Removed Successfully", `${data.title} removed from cart`, ()=>{console.log("Success")})
  }

  const { id, title, price, description, images, quantity } = data;
  
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image style={styles.image} source={{ uri: images[0], width: 50, height: 50 }} />
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.descriptionContainer}>
          <Text>{title}</Text>
          <Text>{description}</Text>
        </View>
        {editable && <View style={styles.quantityContainer}>
          <Icon style={styles.quantityItem} name="minuscircle" size={22} color="#7187f5" onPress={() => removeItemToCart({ id, title, price, description, images, quantity: 1 })} />
          <Text style={styles.quantityItem}>{quantity}</Text>
          <Icon style={styles.quantityItem} name="pluscircle" size={22} color="#7187f5" onPress={() => addItemToCart({ id, title, price, description, images, quantity: 1 })} />
        </View>}
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
    backgroundColor: '#f5f5f5',
    padding: 5,
    flexWrap: 'wrap',
    borderRadius: 7
  },
  image: {
    borderRadius: 30,
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
    justifyContent: 'center'
  },
  quantityItem: {
    marginHorizontal: 2
  }
}