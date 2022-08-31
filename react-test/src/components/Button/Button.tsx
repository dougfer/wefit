import React, { PropsWithChildren } from 'react'
import { 
  Container,
  Title,
  IconContent
} from './style'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  Icon?: React.ReactElement
  quantityInCart?: number
} 

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ children, Icon, onClick, quantityInCart }) => {
  return (
    <Container onClick={onClick}>
      {Icon && (
        <IconContent>
          {Icon}
          {(!!quantityInCart && quantityInCart > 0) ? <span style={{ width: '20px' }}>{quantityInCart}</span> : <span style={{ width: '20px' }} />}
        </IconContent>
      )}
      <Title>
        {children}
      </Title>
    </Container>
  )
}
