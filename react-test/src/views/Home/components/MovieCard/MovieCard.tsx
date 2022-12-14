import React from 'react'
import { 
  Card,
  Image,
  MovieTitle,
  Price,
  ImageContent

} from './style'
import { formatToRealStr } from 'src/utils/format'
import { Button } from 'src/components'
import { FaCartPlus } from 'react-icons/fa'
import { Movie } from 'src/types'
import { useAppDispatch, useAppSelector } from 'src/store/hooks'
import { addMovie } from 'src/store/features/movieSlice'

interface MovieCardProps {
  movie: Movie
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const dispatch = useAppDispatch()

  const { movies } = useAppSelector((state) => state.moviesList)

  const moviesInCartCounter = movies.filter((mov) => mov.id === movie.id).length

  const handleAddMovie = (movie: Movie) => {
    dispatch(addMovie(movie))
  }

  return (
    <Card>
      <ImageContent>
        <Image src={movie.image} />
        <MovieTitle>{movie.title}</MovieTitle>
      </ImageContent>
      <Price>{formatToRealStr(movie.price)}</Price>
      <Button
        Icon={<FaCartPlus size={13} />}
        onClick={() => handleAddMovie(movie)}
        quantityInCart={moviesInCartCounter}
      >
        Adicionar ao Carrinho
      </Button>
    </Card>
  )
}
