import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import DrawerContent from './src/DrawerContent';
import AccountDetails from './src/screens/AccountDetails';
import Home from './src/screens/Home';
import Order from './src/screens/Order';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Account Details' component={AccountDetails} />
        <Drawer.Screen name='My Orders' component={Order} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

