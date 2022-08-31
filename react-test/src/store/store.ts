import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './features/movieSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { movieApi } from 'src/services'

export const store = configureStore({
  reducer: {
    moviesList: movieReducer,
    [movieApi.reducerPath]: movieApi.reducer
  },
  middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(movieApi.middleware),
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
