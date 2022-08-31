import React from 'react'
import { Container, LoadingIcon } from './styles'
import { useGetMoviesQuery } from 'src/services'
import { MovieCard } from './components'

export const Home: React.FC = () => {

  const { data, isLoading } = useGetMoviesQuery()

  return (
    <Container>
      {isLoading ? <LoadingIcon size={60} /> : data?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </Container>
  )
}
