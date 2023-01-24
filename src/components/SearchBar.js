import { TextInput, StyleSheet, Platform, StatusBar } from 'react-native'
import React, { useState } from 'react'

const SearchBar = ({value, onChangeHandler}) => {
    
    return (
        <TextInput
            style={styles.SearchBar}
            value={value}
            placeholder='Search Product or Category'
            onChangeText={(text) => { onChangeHandler(text) }}
        />
    )
}

export default SearchBar

const styles = StyleSheet.create({
    SearchBar: {
        height: 40,
        borderColor: '#f5f5f5',
        borderWidth: 1,
        padding: 2,
        margin: 5,
        borderWidth: 0,
        backgroundColor: "#ededed",
        width: '97%',
        borderRadius: 5,
        marginTop: 7
    }
})