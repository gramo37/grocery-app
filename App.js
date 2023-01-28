import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from "./store"
import MyDrawer from './src/MyDrawer';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MyDrawer />
      </PersistGate>
    </Provider>
  );
}