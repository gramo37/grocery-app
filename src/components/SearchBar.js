import { TextInput, StyleSheet, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

const SearchBar = ({value, onChangeHandler}) => {
    
    return (
        <>
        <TextInput
            style={styles.SearchBar}
            value={value}
            placeholder='Search Product or Category'
            onChangeText={(text) => { onChangeHandler(text) }}
        />
        <View style={styles.searchIconContainer}><Icon name="search1" size={20} color="#b5b5b5" /></View>
        </>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    SearchBar: {
        height: 40,
        borderColor: '#e3e3e3',
        borderWidth: 1,
        padding: 2,
        margin: 5,
        backgroundColor: "#fff",
        width: '97%',
        borderRadius: 5,
        marginTop: 7,
        paddingLeft: 40,
        fontSize: 17
    },
    searchIconContainer:{
        position: 'absolute',
        left:15,
        borderRightWidth: 1,
        paddingRight: 5,
        borderRightColor: '#858585'
    }
})