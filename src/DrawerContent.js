import { View } from 'react-native'
import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItem
} from "@react-navigation/drawer"

import {
    Avatar,
    Title,
    Caption,
    Drawer,
} from "react-native-paper"
import { useNavigation } from '@react-navigation/native'

const DrawerContent = ({ props }) => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={[styles.userInfoSection, { flexDirection: 'row' }]}>
                    <View style={{ marginTop: 15 }}>
                        <Avatar.Image size={20} source={require("./assets/images/prasanna.jpeg")} />
                    </View>
                    <View style={{ marginLeft: 9, marginTop: 15 }}>
                        <Title style={styles.title}>Prasanna</Title>
                        <Caption style={styles.caption}>Pune, India</Caption>
                    </View>
                </View>
                <Drawer.Section style={{ flex: 1, marginTop: 15 }}>
                    <DrawerItem label="Home" onPress={() => { navigation.navigate('Home') }} />
                    <DrawerItem label="Account Details" onPress={() => { navigation.navigate('Account Details') }} />
                    <DrawerItem label="My Cart" onPress={() => { navigation.navigate('My Orders') }} />
                </Drawer.Section>
            </DrawerContentScrollView>
        </View>

    )
}

export default DrawerContent

const styles = {
    userInfoSection: {},
    title: {},
    caption: {}
}