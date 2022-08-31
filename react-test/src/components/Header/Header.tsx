import React from 'react'
import { 
  Container, 
  Logo,
  CartSection,
  MyCart,
  Title,
  ItemsCount,
  Icon
} from './style'
import { FaShoppingBag } from 'react-icons/fa'
import { useTheme } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'src/store/hooks'


export const Header: React.FC = () => {
  
  const navigate = useNavigate()
  const { colors } = useTheme()

  const { movies } = useAppSelector((state) => state.moviesList)

  const handleRedirect = () => {
    navigate('cart')
  }

  return (
    <Container>
      <Logo onClick={() => navigate('/')}>
        WeMovies
      </Logo>
      <CartSection>
        <MyCart>
          <Title>Meu Carrinho</Title>
          <ItemsCount>{`${movies.length} ${movies.length > 1 || movies.length === 0 ? 'Itens' : 'Item'}`}</ItemsCount>
        </MyCart>
        <Icon>
          <FaShoppingBag size={32} color={colors.background_secondary} onClick={handleRedirect} style={{ cursor: 'pointer' }} />
        </Icon>
      </CartSection>
    </Container>
  )
}
