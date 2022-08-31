import React, { PropsWithChildren } from 'react'
import { 
  Container,
  Title,
  IconContent
} from './style'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  Icon?: React.ReactElement
} 

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ children, Icon, onClick }) => {
  return (
    <Container onClick={onClick}>
      {Icon && (
        <IconContent>
          {Icon}
          1
        </IconContent>
      )}
      <Title>
        {children}
      </Title>
    </Container>
  )
}
