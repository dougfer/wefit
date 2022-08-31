import React, { useCallback, useMemo } from 'react'
import { useAppSelector, useAppDispatch } from 'src/store/hooks'
import { formatToRealStr } from 'src/utils/format'
import { 
  TableHead,
  ImageCell,
  TextInfo,
  Line,
  Container,
  Footer,
  TotalContent,
  TotalText,
  TotalValue
} from './styles'
import { QuantityCell } from './components'
import { useNavigate } from 'react-router-dom'
import { Button } from 'src/components'
import { FaTrash } from 'react-icons/fa'
import { useTheme } from 'styled-components'
import { removeAllByIndex } from 'src/store/features/movieSlice'

export type MovieInfo = {
  id: number
  title: string
  singlePrice: number
  total: number
  image: string
  quantity: number
}

interface MoviesTableProps {
  handleConfirmPurchase: () => void
}

export const MoviesTable: React.FC<MoviesTableProps> = ({ handleConfirmPurchase }) => {
  
  const { movies } = useAppSelector((state) => state.moviesList)

  const { colors } = useTheme()

  const dispatch = useAppDispatch()
  
  const navigate = useNavigate()
  
  const handleBack = () => {
    navigate('/')
  }

  const handleDeleteMovie = (id: number) => {
    dispatch(removeAllByIndex(id))
  }

  const getQuantityTotal = useCallback((id: number) => {
    return movies.filter((movie) => movie.id === id).length
  }, [movies])

  const tableInfo = useMemo((): Record<number, MovieInfo> => {
    return movies.reduce((movieObj, currentMovie) => {
      return {
        ...movieObj,
        [currentMovie.id]: {
          id: currentMovie.id,
          title: currentMovie.title,
          singlePrice: currentMovie.price,
          quantity: getQuantityTotal(currentMovie.id),
          get total() { return this.quantity * this.singlePrice },
          image: currentMovie.image,
        }
      }
    }, {} as Record<number, MovieInfo>)
  }, [getQuantityTotal, movies])

  const totalValue = useMemo(() => {
    return movies.reduce((total, movie) => total += movie.price ,0)
  }, [movies])

  return (
    <Container>
      <table style={{ width: '100%' }}>
        <thead style={{ marginBottom: '50px' }}>
          <tr>
            <TableHead></TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>QTD</TableHead>
            <TableHead>SUBTOTAL</TableHead>
            <TableHead></TableHead>
          </tr>
        </thead>
        <tbody>
          {Object.values(tableInfo).map((movie, index) => (
            <tr key={index}>
              <td width='15%'><ImageCell src={movie.image}/></td>
              <td width='23%'>
                <TextInfo>{movie.title}</TextInfo>
                <TextInfo>{formatToRealStr(movie.singlePrice)}</TextInfo>
              </td>
              <td width='23%'><QuantityCell movie={movie} /></td>
              <td width='23%'><TextInfo>{formatToRealStr(movie.total)}</TextInfo></td>
              <td width='15%'><FaTrash style={{ cursor: 'pointer' }} onClick={() => handleDeleteMovie(movie.id)} color={colors.button_primary} size={18} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Line />
      <Footer>
        <span>
          <Button onClick={handleConfirmPurchase}>Finalizar pedido</Button>
        </span>
        <TotalContent>
          <TotalText>TOTAL</TotalText>
          <TotalValue>{formatToRealStr(totalValue)}</TotalValue>
        </TotalContent>
      </Footer>
    </Container>
  )
}
