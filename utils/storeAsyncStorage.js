import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveInLocalStorage = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
        return value
    } catch (error) {
      console.log(error, "error while saving")
        return {items: []}
    }
}

export const getFromLocalStorage = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        console.log(value, "local value")
        if(value !== null) {
          // value previously stored
          const value = JSON.parse(value)
          return value
        }
        return {items: []}
      } catch(e) {
        // error reading value
        console.log(e)
        return {items: []}
      }
}