import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './features/movieSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { movieApi } from 'src/services'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers } from 'redux'

const persistConfig = {
  key: 'root',
  storage,
}

const combinedReducers = combineReducers({
  moviesList: movieReducer,
  [movieApi.reducerPath]: movieApi.reducer
})
const persistedReducer = persistReducer(persistConfig, combinedReducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(movieApi.middleware),
})

setupListeners(store.dispatch)
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
