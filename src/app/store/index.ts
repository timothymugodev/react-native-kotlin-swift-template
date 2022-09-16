import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import userReducer from './reducers/userSlice';

const staticReducers = {
  user: userReducer
};

const createReducers = () => combineReducers({
  ...staticReducers
});

const persistConfig = {
  key: 'root',
  version: 1,
  default: AsyncStorage,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, createReducers());

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
