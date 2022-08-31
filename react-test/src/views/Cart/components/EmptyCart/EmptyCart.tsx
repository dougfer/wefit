import React from 'react'
import { 
  Container,
  Message,
  Line
} from './style'
import { Button } from 'src/components'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as EmptyImage } from 'src/assets/images/Empty.svg'

export const EmptyCart: React.FC = () => {

  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
  }

  return (
    <Container>
      <Message>Parece que não há nada por aqui :(</Message>
      <EmptyImage />
      <Line />
      <span>
        <Button onClick={handleBack}>Voltar</Button>
      </span>
    </Container>
  )
}
