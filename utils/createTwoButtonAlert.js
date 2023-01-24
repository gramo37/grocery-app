import {Alert} from 'react-native';


export const createTwoButtonAlert = (title, message, okPressed) =>
    Alert.alert(title, message, [
        { text: 'OK', onPress: () => okPressed() },
    ]);