import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import {
    Avatar,
    Title,
    Caption
} from "react-native-paper"
import { BLACK, WHITE } from '../assets/colors'
import { ACCOUNTDETAILS, CART, HOME } from '../assets/screenNames'
import { DrawerContext } from '../MyDrawer';

const { name, profileImage, address } = require("../data/customer.json")

const CustomDrawerContent = () => {
    const {changeActiveScreen, openMenuOnPress} = useContext(DrawerContext);

    const changeScreenOnPress = (screenName) => {
        changeActiveScreen(screenName)
        openMenuOnPress()
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ marginTop: 50 }}>
                <View style={[styles.userInfoSection, { flexDirection: 'row' }]}>
                    <View style={{ marginTop: 10, marginLeft: 10 }}>
                        <Avatar.Image size={45} source={{ uri: profileImage }} />
                    </View>
                    <View style={{ marginLeft: 9, marginTop: 15 }}>
                        <Title style={styles.title}>{name}</Title>
                        <Caption style={styles.caption}>{address}</Caption>
                    </View>
                </View>
                <View style={{ flex: 1, marginTop: 20, borderBottomColor: 'white', borderBottomWidth: 1, paddingBottom: 13, width: 200 }}>
                    <TouchableOpacity onPress={() => changeScreenOnPress(HOME)} style={{ padding: 18, backgroundColor: WHITE, marginVertical: 14, borderRadius: 7, marginLeft: 8 }}><Text style={{ color: BLACK, fontWeight: '600' }}>Home</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => changeScreenOnPress(ACCOUNTDETAILS)} style={{ padding: 18, backgroundColor: WHITE, marginVertical: 14, borderRadius: 7, marginLeft: 8 }}><Text style={{ color: BLACK, fontWeight: '600' }}>Account Details</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => changeScreenOnPress(CART)} style={{ padding: 18, backgroundColor: WHITE, marginVertical: 14, borderRadius: 7, marginLeft: 8 }}><Text style={{ color: BLACK, fontWeight: '600' }}>My Cart</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default CustomDrawerContent

const styles = {
    userInfoSection: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title: {
        color: WHITE
    },
    caption: {
        color: WHITE

    }
}