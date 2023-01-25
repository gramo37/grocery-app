import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveInLocalStorage = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error, "error while saving")
    }
}

export const getFromLocalStorage = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        console.log(value, "local value")
        return value
      } catch(e) {
        console.log(error, "error while getting")
        return null
      }
}