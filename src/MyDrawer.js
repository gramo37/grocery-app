import { View, Animated } from 'react-native'
import React, { useState, useRef } from 'react'
import CustomDrawerContent from './components/CustomDrawerContent';
import Home from './screens/Home';
import AccountDetails from "./screens/AccountDetails"
import Order from "./screens/Order"
import CustomDrawerHeading from './components/CustomDrawerHeading';
import { ACCOUNTDETAILS, CART, HOME } from './assets/screenNames';
import { PURPLE } from './assets/colors';

const MyDrawer = () => {

    const [showMenu, setShowMenu] = useState()
    const moveRight = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(1)).current;
    const [activeScreen, setActiveScreen] = useState(HOME)

    
    const openMenuOnPress = () => {
        Animated.timing(scale, {
            toValue: showMenu ? 1 : 0.74,
            duration: 300,
            useNativeDriver: true
        }).start();
        
        Animated.timing(moveRight, {
            toValue: showMenu ? 0 : 220,
            duration: 300,
            useNativeDriver: true
        }).start();

        setShowMenu(!showMenu)
    }
    
    const changeActiveScreen = (id) => {
        setActiveScreen(id)
    }
    
    const drawerFunctions = {
        openMenuOnPress,
        changeActiveScreen
    }


    return (
        <DrawerContext.Provider value={drawerFunctions}>
            <View style={{ flex: 1, position: 'relative' }}>
                {/* Menu Options */}
                <View style={{ flex: 1, backgroundColor: PURPLE }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <CustomDrawerContent />
                    </View>
                </View>
                {/* Home Design */}
                <Animated.View style={{ transform: [{ scale: scale }, { translateX: moveRight }], height: '100%', borderRadius: showMenu ? 15 : 0, flex: 1, backgroundColor: 'white', position: 'absolute', top: 0 }}>
                    {activeScreen === HOME && <View><CustomDrawerHeading openMenuOnPress={openMenuOnPress} name="Shop" /><Home /></View>}
                    {activeScreen === ACCOUNTDETAILS && <View><CustomDrawerHeading openMenuOnPress={openMenuOnPress} name="Account Details" /><AccountDetails changeActiveScreen={changeActiveScreen} /></View>}
                    {activeScreen === CART && <View><CustomDrawerHeading openMenuOnPress={openMenuOnPress} name="My Cart" /><Order changeActiveScreen={changeActiveScreen} /></View>}
                </Animated.View>
            </View>
        </DrawerContext.Provider>
    )
}

export default MyDrawer

export const DrawerContext = React.createContext()
