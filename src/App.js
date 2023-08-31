import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import MyRoutes from './MyRoutes';
import { cartReducer } from './Reducers/cartReducer';
import { itemReducer } from './Reducers/itemReducer';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { Analytics } from '@vercel/analytics/react';

 



function App() {

  const persistConfig = {
    key: 'root',
    storage
  }
  
  const rootReducer = combineReducers({
    itemStore: itemReducer,
    cartStore: cartReducer
  })
  
  const myPersistedReducer=persistReducer(persistConfig,rootReducer)


  const myStore = createStore(myPersistedReducer)
  const myPersistor = persistStore(myStore)  

  return (
    <>
      <Provider store={myStore}>
        <PersistGate persistor={myPersistor}>
        <MyRoutes />
        </PersistGate>
      </Provider>
      <Analytics />

    </>
  )
}

export default App;
