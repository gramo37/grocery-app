import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import DrawerContent from './src/DrawerContent';
import AccountDetails from './src/screens/AccountDetails';
import Home from './src/screens/Home';
import Order from './src/screens/Order';
import { store, persistor } from "./store"

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='Account Details' component={AccountDetails} />
            <Drawer.Screen name='My Orders' component={Order} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

