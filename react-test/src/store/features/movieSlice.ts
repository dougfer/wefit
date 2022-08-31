import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Movie } from 'src/types'

export interface MovieState {
  movies: Movie[]
}

const initialState: MovieState = {
  movies: []
}

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<Movie>) => {
      state.movies.push(action.payload)
    },
    clearMovies: (state) => {
      state.movies = []
    },
    removeByIndex: (state, action: PayloadAction<number>) => {
      state.movies.splice(action.payload, 1)
    },
    removeAllByIndex: (state, action: PayloadAction<number>) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload)
    }
  }
})

export const { addMovie, clearMovies, removeByIndex, removeAllByIndex } = movieSlice.actions

export default movieSlice.reducer
