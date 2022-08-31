import React, { useCallback, useState } from 'react'
import { 
  Container,
} from './style'
import { clearMovies } from 'src/store/features/movieSlice'
import { useAppSelector, useAppDispatch } from 'src/store/hooks'
import { EmptyCart, MoviesTable, PurchaseConfirm } from './components'

export const Cart: React.FC = () => {
  const [purchaseConfirmation, setPurchaseConfirmation] = useState(false)

  const { movies } = useAppSelector((state) => state.moviesList)

  const dispatch = useAppDispatch()

  const handleConfirmPurchase = useCallback(() => {
    setPurchaseConfirmation(true)
    dispatch(clearMovies())
  }, [dispatch])

  return (
    <Container>
      {purchaseConfirmation ? <PurchaseConfirm /> : movies.length > 0 ? <MoviesTable handleConfirmPurchase={handleConfirmPurchase} /> : <EmptyCart />}
    </Container>
  )
}
