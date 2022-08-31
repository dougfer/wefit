import React from 'react'
import { useTheme } from 'styled-components'
import { FiPlusCircle } from 'react-icons/fi'
import { MovieInfo } from '../../MoviesTable'
import { FiMinusCircle } from 'react-icons/fi'
import { Container, QuantityContent } from './styles'
import { useAppDispatch, useAppSelector } from 'src/store/hooks'
import { addMovie, removeByIndex } from 'src/store/features/movieSlice' 

interface QuantityCellProps {
  movie: MovieInfo
}

export const QuantityCell: React.FC<QuantityCellProps> = ({ movie }) => {
  const { colors } = useTheme()

  const dispatch = useAppDispatch()

  const { movies } = useAppSelector((state) => state.moviesList)

  const handleRemoveMovieQuantity = () => {
    const movieToFind = movies.find((mov) => mov.title === movie.title) || false
    if(movieToFind) {
      const index = movies.indexOf(movieToFind)
      dispatch(removeByIndex(index))
    }
  }

  const handleAddMovieQuantity = () => {
    const movieToAdd = movies.find((mov) => mov.title === movie.title) || false
    if(movieToAdd) {
      dispatch(addMovie(movieToAdd))
    }
  }

  return (
    <Container>
      <FiMinusCircle onClick={handleRemoveMovieQuantity} color={colors.button_primary} size={18} style={{ cursor: 'pointer' }} />
      <QuantityContent>{movie.quantity}</QuantityContent>
      <FiPlusCircle onClick={handleAddMovieQuantity} color={colors.button_primary} size={18} style={{ cursor: 'pointer' }}  />
    </Container>
  )
}
