import { Movie } from 'src/types'
import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.0.42:3333' }),
  endpoints: (builder) => ({
    getMovies: builder.query<Movie[], void>({
      query: () => 'products'
    })
  })
})

export const { useGetMoviesQuery } = movieApi
