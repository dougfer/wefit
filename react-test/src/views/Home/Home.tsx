import React from 'react'
import { Container, LoadingIcon } from './styles'
import { useQuery } from '@tanstack/react-query'
import { getMoviesOperation } from 'src/services'
import { MovieCard } from './components'

export const Home: React.FC = () => {

  const { data, isLoading } = useQuery(['getMovies'], getMoviesOperation)

  if(data && data?.length === 0) {
    return <div style={{ height: '100%', backgroundColor: 'red' }} />
  }

  return (
    <Container>
      {isLoading ? <LoadingIcon size={60} /> : data?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </Container>
  )
}
